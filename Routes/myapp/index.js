const express = require('express');
const router = express.Router();

const signup = require('./registration');
const login = require('./login');
const tokentodata = require('./tokenToData')


router.get('/tokentodata', tokentodata)
router.get('/login', login)
router.post('/signup', signup)

module.exports = router;