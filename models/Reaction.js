const { Schema, Types } = require('mongoose');

// Reaction schema
const reactionSchema = new Schema(
    {
        //ID
        reactiondId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        // reaction text
        reactionBody: {
            type:String,
            required: true,
            maxlength: 280
        },

        // Username
        username: {
            type: String,
            required: true
        },

        // Time of reaction post
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true,
        }
    }
)

module.exports = reactionSchema;