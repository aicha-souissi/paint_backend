const mongoose = require("mongoose");
const TendanceSchema = new mongoose.Schema(
    {
      nameColor: { type: String, 
        required: true },
      refColor: {
        type: String,
        required: true
      
      },
      description: {
        type: String,
        required: false                   
      },
      /*image*/
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model('Tendance',TendanceSchema)