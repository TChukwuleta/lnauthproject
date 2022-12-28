const express = require('express')
const lnurlServer = require('../helpers/lnurl')
const { responseError } = require("../helpers/response")
const { emitSocketEvent } = require('../../app')

const lnurllogin = async (req, res, next) => {
    try {
        const result = await lnurlServer.generateNewUrl("login")
        res.send(result)
    } catch (error) {
        next(err)
    }
}

const pseudoLogin = async (req, res, next) => {
    try {
        const query = req.query;
        if(query.key){
            const key = String(query.key)
            emitSocketEvent.emit('auth', {key})
            res.json({ key })
        }
        else {
            return responseError(res, 404, "Unsuccessful LNURL Auth login")
        }
    } catch (error) {
        next(err)
    }
}

module.exports = {
    lnurllogin,
    pseudoLogin
}