const router = require('express').Router();

const {
  getThoughts,   // Gets all users
  getOneThought, // Gets a specific user with id
  createThought, // Creates a new user
  updateThought, // Updates a user
  deleteThought  // Deletes a user
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOneThought).delete(deleteThought).put(updateThought);

module.exports = router;