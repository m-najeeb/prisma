const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/userController");

router.route("/signup").post(signUp);

module.exports = router;
