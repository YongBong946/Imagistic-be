const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users', (req, res) => {
    User.find({})
        .then(docs => res.send(docs))
        .catch(err => res.send(err))
})

module.exports = router;
