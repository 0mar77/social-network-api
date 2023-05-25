const { Schema, model } = require('mongoose');
const thoughSchema = require('./Thought');

// User model
const userSchema = new Schema(
    {
        // Username
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        // email
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^[\w\.-]{1,30}@[\w]{1,20}\.[a-z]{2,5}$/, 'Please add a valid email']
        },

        // Makes connection the thoughts model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],

        // Makes connection to friends
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

module.exports = model('User', userSchema)