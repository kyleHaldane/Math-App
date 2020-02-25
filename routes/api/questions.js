const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("api/questions")
  .get(questionsController.findTen)
  .post(questionsController.updateWithAnswer)




module.exports = router;
