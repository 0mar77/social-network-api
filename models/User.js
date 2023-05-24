const mongoose = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^[\w\.-]{1,30}@[\w]{1,20}\.[a-z]{2,5}$/, 'Please add a valid email']
        },
        thoughts: {

        },
        // friends: {

        // }
    }
)

module.exports = mongoose.model('User', userSchema)