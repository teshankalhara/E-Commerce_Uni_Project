const userModel = require("../models/userModel")

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body
        if (!email) {
            throw new Error("Email Provide")
        }
        if (!password) {
            throw new Error("Password Provide")
        }
        if (!name) {
            throw new Error("Name Provide")
        }

        /* const userData = new userModel({
            email,
            password,
            name,
        })*/

        const userData = new userModel(req.body)

    } catch (err) {
        req.json({
            message: err,
            error: true,
            success: false,
        })
    }
}