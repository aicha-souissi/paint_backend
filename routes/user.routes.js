const express = require("express");
const userController = require("../controllers/user.controller");
const verifToken = require("../utils/verifToken");
const verifAdmin = require("../utils/verifAdmin");
const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", verifToken, verifAdmin, userController.getAllUsers);
module.exports = router;

