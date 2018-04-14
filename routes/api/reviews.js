const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/reviews"
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

// Matches with "/api/reviews/:id"
router
  .route("/:id")
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;