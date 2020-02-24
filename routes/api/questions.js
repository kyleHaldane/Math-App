const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findTen)


// Matches with "/api/questions/:id"
router
  .route("/:id")
  .post(questionsController.updateWithAnswer)

module.exports = router;
