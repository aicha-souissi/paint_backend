const express = require("express");
const usersAppsController = require("../controllers/usersApps.controller");
const verifToken = require("../utils/verifToken");
const verifAdmin = require("../utils/verifAdmin");
const router = express.Router();

router.post("/registerUsers", usersAppsController.registerUsersApps );
router.post("/loginUsers", usersAppsController.loginUsersApps);
router.get("/", verifToken, verifAdmin, usersAppsController.getAllUsersApps);
module.exports = router;

