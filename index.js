const { server } = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 1007
const serverer = server.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
})

process.on('uncaughtException', error => {
    console.error(error);
})

process.on('beforeExit', code => {
    try {
        serverer.close()
    } catch (error) {
        console.log(error)
    }
    process.exit(code)
})