const express = require("express")
const router = express.Router()

const exportsjsondata = require("./exportdata");
const downloadFile = require("./download");

router.get('/jsonexport', exportsjsondata)
router.get('/download', downloadFile)


module.exports = router

