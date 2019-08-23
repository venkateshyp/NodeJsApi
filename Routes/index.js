const express = require('express');
const router = express.Router()

const tktNumber = require('./tktNumber')
const upload = require('./Uploads')
const marico = require('./marico')
const excel = require('./excel')
const sendmail = require('./Mails')
const mongoose = require('./Mongoose')
const myapp = require('./myapp')



router.use('/tktNumber', tktNumber)
router.use('/upload', upload)
router.use("/marico", marico )
router.use("/excel", excel)
router.use('/send', sendmail)
router.use('/mongoose', mongoose)
router.use('/myapp', myapp)



module.exports = router