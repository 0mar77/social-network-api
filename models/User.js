const mongoose = require('mongoose');
const thoughSchema = require('./Thought');

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
        thoughts: [thoughSchema],
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

module.exports = mongoose.model('User', userSchema)