const express = require("express");
const projectController = require("../controllers/project.controller");

const router = express.Router();

const verifAdmin =require('../utils/verifAdmin'); 
const verifToken= require('../utils/verifToken') ;

router.post("/addproject",verifToken, projectController.addProject);
router.get("/projectlist",verifToken, projectController.getAllProject);
router.put('/updateprojet/:id',verifToken,projectController.updateProject); 
router.delete("/deleteproject/:id",verifToken, projectController.deleteProject);

module.exports = router ; 