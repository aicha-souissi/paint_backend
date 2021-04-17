const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    nameProject: {
      type: String,
      required: true,
    },
    refColor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nameProduit: {
        type: String,
        required: false,
      },
     /* imgSelect:{
        
      },*/

  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
