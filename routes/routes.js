const express = require("express");
const router = express.Router();

const {
  get20Items,
  getItem,
  addVote,
  addCandidate,
  deleteCandidate,
} = require("../controllers/main");

router.route("/get-20-items").get(get20Items);
router.route("/get-item/:id").get(getItem);
router.route("/add-vote/:_id").post(addVote);
router.route("/add-candidate").post(addCandidate);
router.route("/delete-candidate/:id").post(deleteCandidate);
module.exports = router;
