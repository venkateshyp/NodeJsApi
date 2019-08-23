const express = require("express");
const router = express.Router();


const file = require('./file')

router.post("/", file)

module.exports = router;

