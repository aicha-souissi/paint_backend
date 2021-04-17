const Magasin = require("../models/magasin.model");

const addMagasin = async (req, res) => {
  try {
    let { nameMagasin, lat, lng, adrFb, email, numTel } = req.body;

    let newMagasin = new Magasin({
      nameMagasin: nameMagasin,
      lat: lat,
      lng: lng,
      adrFb: adrFb,
      email: email,
      numTel: numTel,
    });
    let result = await newMagasin.save();
    res.json({
      success: true,
      message: "magasin ajouter",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};

const deleteMagasin = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Magasin.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Magasin supprimer",
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};
const updateMagasin = async (req, res) => {
  try {
    let { id } = req.params;
    let { lat, lng, adrFb, email, numTel } = req.body;
    let result = Magasin.findByIdAndUpdate(id, {
      nameMagasin: nameMagasin,
      lat: lat,
      lng: lng,
      adrFb: adrFb,
      email: email,
      numTel: numTel,
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

const getAllMagasin = async (req, res) => {
  try {
    let magasinList = await Magasin.find({});
    res.json({
      success: true,
      message: magasinList,
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};


module.exports = { getAllMagasin,addMagasin,updateMagasin,deleteMagasin}
