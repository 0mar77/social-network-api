const dayjs = require('dayjs');
const mongoose = require('mongoose');

const currentDate = dayjs().format('DD/MM/YYYY');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: currentDate
        },
        username: {
            type: String,
            required: true
        },
        // reactions: {

        // }
    }
)

module.exports = mongoose.model('Thought', thoughtSchema)

