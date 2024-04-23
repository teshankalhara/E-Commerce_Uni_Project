const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')

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

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        /* const userData = new userModel({
            email,
            password,
            name,
        })*/

        if (!hashPassword) {
            throw new Error("Password Field Error")
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(req.body)
        const saveUser = userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User Created OK!!"
        })

    } catch (err) {
        res.json({
            message: err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController