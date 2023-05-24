//const dayjs = require('dayjs');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

//const currentDate = dayjs().format('DD/MM/YYYY');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

module.exports = model('Thought', thoughtSchema)

