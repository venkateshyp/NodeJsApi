const express = require('express');
const router = express.Router();

const create = require('./create');
const getalldata = require('./getalldata');
const deleteId = require('./delete');

router.get('/allusers', getalldata);
router.post("/", create);
router.delete('/:id', deleteId);


module.exports =router
