//Front-End routes

const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");//insert controller

// Matches with "/roster"
router.route("/roster")
  .get(rosterController.findAllforFrontEnd)
  

//   router.route("/add")
//   .post(rosterController.create);

// // Matches with "/api/roster/:id"
// router.route("/roster/:id")
//   // .get(rosterController.findById)
//   // .put(rosterController.update)
//   .delete(rosterController.remove);

module.exports = router;