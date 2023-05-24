const { User, Thought } = require('../models');

module.exports = {
    // Get all of the users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err){
            res.status(500).json(err)
        }
    },

    // Get a single user
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ __id: req.params.userId });
            res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // Create a User
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { __id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // Delete a User
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ __id: req.params.userId });
            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

}