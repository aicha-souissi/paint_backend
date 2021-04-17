const mongoose = require("mongoose");
const ColorSchema = new mongoose.Schema(
    {
      nameColor: { type: String, 
        required: true },
      refColor: {
        type: String,
        required: true
      },
      
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Color',ColorSchema)