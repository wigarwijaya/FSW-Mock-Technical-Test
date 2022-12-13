//import mongoose to create new Schema
const mongoose = require("mongoose")

//create Schema
const { Schema } = mongoose;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 4,
        unique: true
    }
})

UserSchema.statics.signup = async function(user) {
    if (!user){
        throw Error("Field must be filled")
    }

    const exists = await this.findOne({ user })
    if (exists){
        throw Error('User already in use')
    }

    const users = await this.create({user})

    return users
}

UserSchema.statics.login = async function(user) {
    if (!user){
        throw Error("Field must be filled")
    }

    const users = await this.findOne({ user })
    if (!user) {
        throw Error('Invalid User')
    }

    return users
}

//export this Schema
module.exports = mongoose.model('User', UserSchema);