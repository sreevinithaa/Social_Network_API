const router = require('express').Router();
const {
    getThoughts,
    getSinglethought,
    createThought,
    updateThought,
   deletethought,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSinglethought)
  .put(updateThought)
  .delete(deletethought);

module.exports = router;
