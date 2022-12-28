const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 1007
const server = app.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
})

process.on('uncaughtException', error => {
    console.error(error);
})

process.on('beforeExit', code => {
    try {
        server.close()
    } catch (error) {
        console.log(error)
    }
    process.exit(code)
})