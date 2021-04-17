const mongoose = require("mongoose");

const MagasinSchema = new mongoose.Schema({
  nameMagasin: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  adrFb: { type: String, required: false, default: "" },
  email: { type: String, required: false, default: "" },
  numTel: { type: Number, required: true },
});
                                            
module.exports = mongoose.model("Magasin", MagasinSchema);
