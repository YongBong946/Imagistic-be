const express = require('express');
const router = express.Router();

// Controllers index that will route the request appropriately
router.use('/auth', require('./auth'))
router.use('/', require('./public'))

module.exports = router;