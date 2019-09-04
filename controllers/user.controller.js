const express = require('express')
const router = express.Router()

const login = async (req, res) => {
    res.json({
        status: true,
        message: 'Successfully logged in.'
    })
}

const register = async (req, res) => {
    res.json({
        status: true,
        error: 'Successfully registered.'
    })
}

const updateProfile = (req, res) => {
    res.json({
        status: true,
        message: 'Successfully updated your profile.'
    })
}

const generateResetCode = (req, res) => {
    res.json({
        status: true,
        message: 'Successfully sent the email'
    })
}

const resetPassword = (req, res) => {
    res.json({
        status: true
    })
}

module.exports = {
    login,
    register,
    updateProfile,
    generateResetCode,
    resetPassword
}
