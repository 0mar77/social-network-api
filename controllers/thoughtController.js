const { Thought, User } = require('../models');

module.exports = {
    
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // Get a thought by id
    async getOneThought(req, res) {
        try{
            const thought = await Thought.findOne({ _id:req.params.thoughtId }).select('-__v');;
            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // Create a thought
    async createThought(req, res) {
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToset: req.body },
                { new: true }
            );
            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // Updata a thought
    async updateThought(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // Delete a thought
    async deleteThought(req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err)
        }
    }
}