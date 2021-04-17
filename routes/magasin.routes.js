const MagasinController = require("../controllers/magasin.controller");
const express = require("express");
const verifAdmin = require("../utils/verifAdmin");
const verifToken = require("../utils/verifToken");

const router = express.Router();

router.get("/", verifToken, MagasinController.getAllMagasin);
router.post('/add',verifToken,verifAdmin,MagasinController.addMagasin) ; 
router.put('/update/:id',verifToken,verifAdmin,MagasinController.updateMagasin); 
router.delete('/delete/:id',verifToken,verifAdmin,MagasinController.deleteMagasin)


module.exports = router ; 