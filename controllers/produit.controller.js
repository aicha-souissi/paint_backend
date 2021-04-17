const Produit = require("../models/produit.model");

const addProduit = async (req, res) => {
  try {
    let {
      nameProduit,
      typeProduit,
      support,
      aspect,
      info,
      typeUtilisation,
      nature,
    } = req.body;
    let existingProduit = await Produit.findOne({ nameProduit: nameProduit });
    if (existingProduit) {
      res.json({
        message: "produit existant",
        result: null,
        success: false,
      });
    } else {
      let newProduit = new Produit({
        nameProduit: nameProduit,
        typeProduit: typeProduit,
        support: support,
        aspect: aspect,
        info: info,
        typeUtilisation: typeUtilisation,
        nature: nature,
      });
      let result = await newProduit.save();
      res.json({
        message: "Produit ajouter",
        result: result,
        success: true,
      });
    }
    
  } catch (error) {
    res.json({
      message: error.message,
      result: null,
      success: false,
    });
  }
};

const getAllProduit = async (req, res) => {
  try {
    let produitList = await Produit.find({});
    res.json({
      message: produitList,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

const deleteProduit = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Produit.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Produit supprimer",
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};

const updateProduit = async (req, res) => {
  try {
    let { id } = req.params;
    let {nameProduit,nature,typeProduit,support,aspect,info,typeUtilisation } = req.body;
    let result = Produit.findByIdAndUpdate(id, {
      nameProduit: nameProduit,
      nature: nature,
      typeProduit: typeProduit,
      support: support,
      aspect: aspect,
      info: info,
      typeUtilisation: typeUtilisation,
    });
    res.json({
      success: true,
      message: "Modifier avec success",
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};




module.exports = { addProduit, getAllProduit,deleteProduit,updateProduit };
