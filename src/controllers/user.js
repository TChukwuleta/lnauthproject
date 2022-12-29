const {lnurlServer} = require('../helpers/lnurl')
const { responseError } = require("../helpers/response")
const { uploadBase64ToCloudinary } = require("../helpers/qrcode")

const lnurllogin = async (req, res, next) => {
    try {
        const result = await lnurlServer.generateNewUrl("login")
        const qrCode = await uploadBase64ToCloudinary(result.encoded)
        const responses = {
            ...result,
            qrCode
        }
        res.send(responses)
    } catch (error) {
        next(error)
    }
}

const pseudoLogin = async (req, res, next) => {
    try {
        const query = req.query;
        console.log(query)
        if(query.key){
            const key = String(query.key)
            //emitSocketEvent.emit('auth', {key})
            res.json({ key })
        }
        else {
            return responseError(res, 404, "Unsuccessful LNURL Auth login")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    lnurllogin,
    pseudoLogin
}