const User = require('../models/userModel')

// signup a user
const signupUser = async (req, res) => {
    const { user } = req.body

    try {
        const users = await User.signup(user)
        res.status(200).json({users})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};

// login a user
const loginUser = async (req, res) => {
    const { user } = req.body

    try {
        const users = await User.login(user)
        res.status(200).json({users})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = { signupUser, loginUser }