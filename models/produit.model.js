const mongoose = require("mongoose");
const ProduitSchema = new mongoose.Schema(
    {
      nameProduit: { type: String, 
        required: true },
      nature: {
        type: String,
        required: true,
      },
      typeProduit: {
        type: String,
        required: true,
      },
      support:{
          type: String,
          required:true,
      },
      aspect:{
        type: String,
        required:true,
    },
    info:{
        type: String,
        required:true,
    },
    typeUtilisation:{
        type: String,
        required:true,
    },
/*image*/
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Produit',ProduitSchema)