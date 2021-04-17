const express = require("express");
const colorController = require("../controllers/color.controller");
const verifAdmin = require("../utils/verifAdmin");
const verifToken = require("../utils/verifToken");
const router = express.Router();

router.post("/addcolor", verifToken, verifAdmin, colorController.addColor);
router.get("/colorlist", verifToken, colorController.getAllColor);
router.delete('/deletecolor/:id',verifToken,verifAdmin, colorController.deleteColor)
router.put('/updatecolor/:id',verifToken,verifAdmin,colorController.updateColor); 

module.exports = router;
