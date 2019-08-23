const express = require("express")
const router = express.Router()

const sendmail = require('./sendmail');
const sendsms = require('./sendsms');

router.post('/sendmail', sendmail)
router.post('/sendsms', sendsms)

module.exports = router