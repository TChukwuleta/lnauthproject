const lnurl = require("lnurl")
require('dotenv').config()
const lnurlServer = lnurl.createServer({
    host: 'localhost',
    port: process.env.PORT,
    url:process.env.SERVER_BASE_URL,
    endpoint: "/api/auth/lnurl",
    auth: {
        apiKeys: [],
    },
    lightning: {
        backend: 'lnd',
        config: {
            hostname: process.env.LND_RPC_URL,
            cert: __dirname + "\\lnmacaroon.txt", //process.env.LND_TLS_PATH,
            macaroon: __dirname + "\\lntlspath.txt", //process.env.LND_MACAROON_PATH
        }
    },
    store: {
        backend: "memory"
    }
})

module.exports = {
    lnurlServer
}