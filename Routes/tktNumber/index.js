const express = require('express')
const router = express.Router()

const get = require('./get')
const create = require('./create')
const deleted = require('./deleted')

router.post("/", create)
router.get("/", get)
router.delete("/", deleted)

module.exports =router

