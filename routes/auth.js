const express = require("express");
const router = express.Router();
const { register, login, decVotesLeft } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/dec/:id").post(decVotesLeft);

module.exports = router;
