const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Image = require('../models/Image');

// Public route to get photo information
router.get('/photos', (req, res) => {
    Image.find({})
        .then(docs => res.send(docs))
        .catch(err => res.send(err))
});

// Public route to get an individual photo's information
router.get('/photos/:id', (req, res) => {
    const { id } = req.params;
    Image.findOne({ id })
        .then(doc => res.send(doc))
        .catch(err => res.send(err))
});

module.exports = router;
