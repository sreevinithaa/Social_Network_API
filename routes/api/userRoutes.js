const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    UpdateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(UpdateUser)
  .delete(deleteUser);


  // /api/applications/:applicationId/tags
router.route('/:userId/friend/:friendId').post(addFriend);

// /api/applications/:applicationId/tags/:tagId
router.route('/:userId/friend/:friendId').delete(removeFriend);
module.exports = router;
