const router = require('express').Router();
const {
  getUsers,   // Gets all users
  getOneUser, // Gets one user
  createUser, // Creates a user
  updateUser, // Updates a user
  deleteUser  // Deletes a user
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser).put(updateUser);

module.exports = router;