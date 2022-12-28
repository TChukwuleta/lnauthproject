const express = require('express')

const responseSuccess = (res, status, message, data) => {
    const result = {
        msg,
        data
    }
    return res.status(status).send(result)
}

const responseError = (res, status, message) => {
    const result = {
        message
    }
    return res.status(status).send(result)
}

const responseErrorValidation = (res, status, errors) => {
    const result = {
        message: "Validation Error",
        errors
    }
    return res.status(status).send(result)
}

module.exports = {
    responseSuccess,
    responseError,
    responseErrorValidation
}