const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactiondID: {

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
            
        }
    }
)