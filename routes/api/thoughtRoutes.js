const router = require("express").Router();
const {
  getThoughts,
  getSinglethought,
  createThought,
  updateThought,
  deletethought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// /api/thought
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getSinglethought)
  .put(updateThought)
  .delete(deletethought);

router.route("/:thoughtId/reactions").post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
