const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    UpdateUser,
    deleteUser,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(UpdateUser)
  .delete(deleteUser);

module.exports = router;
