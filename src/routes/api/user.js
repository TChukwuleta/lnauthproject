const { pseudoLogin, lnurllogin } = require("../../controllers/user")
const router = require('express').Router()

router.get('/login-lnurl', lnurllogin)
router.get('/lnurl', pseudoLogin)

module.exports = router