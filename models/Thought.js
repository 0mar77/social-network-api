const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Thought model
const thoughtSchema = new Schema(
    {
        // Thought text
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        // Time of creation
        createdAt: {
            type: Date,
            default: Date.now,
        },

        // Username of person who posted it
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

