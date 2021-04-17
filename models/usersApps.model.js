const mongoose = require("mongoose");

const UsersAppsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsersApps", UsersAppsSchema);