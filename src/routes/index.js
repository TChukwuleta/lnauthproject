const express = require('express')
const router = express.Router()
const apis = require('./api')

router.get('/', (req, res) => {
    res.status(200).send("This is the index route")
})

router.use('/api', apis)

router.all('*', (req, res) => {
    const errorMessage = {
        message: "You are calling a wrong endpoint",
        success: false
    }
    res.status(404).json(errorMessage)
})

module.exports = router