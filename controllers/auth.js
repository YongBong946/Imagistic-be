const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cloudinary = require('cloudinary');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const User = require('../models/User');
const Image = require('../models/Image')

const saltRounds = 5;
const oneDay = 1000 * 60 * 60 * 24;

//Creating a cookie to maintain the users session
const cookie = cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SECRET],
    maxAge: oneDay
})

router.use(cookie);

//Using passport to assist with attaching the cookie and managing the user session
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser((username, done) => {
    User.findOne({ username: username }, (err, user) => {
        done(err, user);
    });
});

// Passport local strategy that integrates with mongoose to find a user
// We are using bcrypt to hash passwords, we compare the plain text to the stored hash below
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username}, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Bad credentials'}) //Change this after testing to Bad credentials
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result !== true) {
                return done(null, false, { mesasage: 'Bad credentials'}) //Change this after testing to Bad credentials
            }
            else {
                return done(null, user)
            }
        })
        
      })
    }
));


// Middleware that runs on routes that require the user to be logged in
const isAuthenticated = (req, res, next) => {
    if(!req.user) {
      return res.status(403).send('Not authorized!');
    }
    next();
  };

  
  // Login route that auths with passport local
  router.post('/login', passport.authenticate('local'), (req, res) => {
      res.send('Successfully logged in')
  });

  // Simple route to check if a user is logged in and return this 
  router.get('/userloggedin', isAuthenticated, (req, res) => {
      if (!req.user) {
          return res.status(403).send('Not logged in')
      }
      else {
          return res.status(200).send('User logged in and authenticated')
      }
  });


//Logout route to destory a user's session
  router.get('/logout', isAuthenticated, (req, res) => {
      req.logout()
      res.send('User logged out')
  });

// Registration route for making a user - this route is locked behind authentication
  router.post('/register', isAuthenticated, (req, res) => {
      const { username, password } = req.body;
      if (username && password) {
        User.findOne({ username })
            .then(doc => {
                if (!doc) {
                    bcrypt.hash(password , saltRounds, (err, hashed) => {
                        if (!err){
                        User.create({ username, password: hashed })
                        }
                        else {
                            res.send('User could not be created')
                        }
                    });
                    return res.send('User has been created')
                }
                return res.status(401).send('User already exists');
            })
      }
      else {
          return res.send('Please send user details');
      }
  });

// Photo upload route. This links up with Cloudinary and mongoose to perform the creation
// actions in the appropriate order
  router.post('/photo/upload', isAuthenticated, upload.single('file'), (req, res) => {
    cloudinary.v2.uploader.upload_stream({resource_type: 'raw'}, (err, result) => {
        if (result) {
            const { title, description, selectedAlbumArray, tagArray } = req.body
            const { url } = result
            const album = selectedAlbumArray.split(',')
            const tag = tagArray.split(',')
            const newImage = {
                title: title,
                image: url,
                description: description,
                tags: tag,
                album: album
            }
            Image.create(newImage)
                .then(doc => res.send(`Your image: ${doc.title} has been successfully uploaded`))
                .catch(err => res.send(err))
        }
        else {
            res.send(err)
        }

    }).end(req.file.buffer)
});

// Patch route to edit a photo's details
router.patch('/photo/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    Image.findByIdAndUpdate(id, { $set: req.body}, (err, img) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(img)
        }
    });
})

// Delete route to delete a photo from both Cloudinary and mongodb
router.delete('/photo/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    Image.findById(id)
        .then(doc => {
            const url = doc.image;
            const splitUrl = url.split('/')
            const publicID = splitUrl[7].split('.')[0]
            cloudinary.v2.uploader.destroy(publicID, (err, result) => {
                if (result) {
                    Image.findByIdAndDelete(id)
                        .then(response => res.send(response))
                        .catch(error => res.send(error))
                }
                else {
                    res.send(err)
                }
            })
        })
        .catch(err => res.send(err))
});

module.exports = router;