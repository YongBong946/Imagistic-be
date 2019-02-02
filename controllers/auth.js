const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cloudinary = require('cloudinary');
const multer = require('multer');
const upload = multer();
const User = require('../models/User');
const Image = require('../models/Image')

const saltRounds = 5;
const oneDay = 1000 * 60 * 60 * 24;

const cookie = cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SECRET],
    maxAge: oneDay
})

router.use(cookie);
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

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username}, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Incorrect username'}) //Change this after testing to Bad credentials
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result !== true) {
                return done(null, false, { mesasage: 'Incorrect password...'}) //Change this after testing to Bad credentials
            }
            else {
                return done(null, user)
            }
        })
        
      })
    }
));



const isAuthenticated = (req, res, next) => {
    if(!req.user) {
      return res.status(403).send('Not authorized!');
    }
    next();
  };

  router.post('/login', passport.authenticate('local'), (req, res) => {
      res.send('Successfully logged in')
  });

  router.get('/userloggedin', isAuthenticated, (req, res, next) => {
      if (!req.user) {
          return res.status(403).send('Not logged in')
      }
      else {
          return res.status(200).send('User logged in and authenticated')
      }
  });

  router.post('/register', (req, res) => {
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

  router.post('/photo/upload', isAuthenticated, upload.single('file'), (req, res) => {
    cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
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
    })
});

module.exports = router;