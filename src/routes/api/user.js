const { pseudoLogin, lnurllogin } = require("../../controllers/user")
const router = require('express').Router()

router.get('/login-lnrul', lnurllogin)
router.get('/lnrul', pseudoLogin)

module.exports = router