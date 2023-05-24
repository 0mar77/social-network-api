const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactiondId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type:String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
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