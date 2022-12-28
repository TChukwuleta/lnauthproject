const lnurl = require("lnurl")
require('dotenv').config()

const lnurlServer = lnurl.createServer({
    host: 'localhost',
    port: process.env.PORT,
    endpoint: "/api/auth/lnurl",
    auth: {
        apiKeys: [],
    },
    lightning: {
        backend: "lnd",
        config: {
            hostname: process.env.LND_RPC_URL,
            cert: process.env.LND_TLS_PATH,
            macaroon: process.env.LND_MACAROON_PATH
        }
    },
    store: {
        backend: "memory"
    }
})