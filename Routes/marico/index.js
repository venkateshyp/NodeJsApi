const express = require("express")
const router = express.Router()

const getbyid = require('./getbyid')
const getbyintent = require('./getbyintent')
const create = require('./create')


router.get('/', getbyid)
router.get('/getbyintent', getbyintent)
router.post('/', create)


module.exports = router