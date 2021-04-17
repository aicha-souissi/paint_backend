const express = require("express");
const produitController = require("../controllers/produit.controller");

const router = express.Router();

const verifAdmin =require('../utils/verifAdmin'); 
const verifToken= require('../utils/verifToken') ;

router.post("/addproduit",verifToken,verifAdmin, produitController.addProduit);
router.get("/produitlist",verifToken, produitController.getAllProduit);
router.put('/updateproduit/:id',verifToken,verifAdmin,produitController.updateProduit); 

router.delete("/deleteproduit/:id",verifToken,verifAdmin, produitController.deleteProduit);

module.exports = router ; 