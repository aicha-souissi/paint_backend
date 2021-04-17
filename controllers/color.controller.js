const Color = require("../models/color.model");

const addColor = async (req, res) => {
  try {
    let { nameColor, refColor } = req.body;
    let existingColor = await Color.findOne({ refColor: refColor });

    if (existingColor) {
      res.json({
        message: "couleur existant",
        result: null,
        success: false,
      });
    } else {
      let newColor = new Color({
        nameColor: nameColor,
        refColor: refColor,
      });
      let result = await newColor.save();

      res.json({
        message: "Couleur ajouter",
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
const getAllColor = async (req, res) => {
  try {
    let colorlist = await Color.find({});
    res.json({
      message: colorlist,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
const deleteColor = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Color.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "couleur supprimer",
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};
const updateColor = async (req, res) => {
  try {
    let { id } = req.params;
    let {nameColor,refColor} = req.body;
    let result = Produit.findByIdAndUpdate(id, {
      nameColor:nameColor,
      refColor:refColor,
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


module.exports = { addColor, getAllColor ,deleteColor,updateColor };
