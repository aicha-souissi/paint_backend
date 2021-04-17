const UsersApps = require("../models/usersApps.model");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUsersApps = async (req, res) => {
  try {
    let { name, firstName, email, role, userPassword } = req.body;
    let existingUser = await UsersApps.findOne({
      email: email,
    });
    if (existingUser) {
      res.json({
        message: "Utilisateur déja existant",
        result: null,
        success: false,
      });
    } else {
      let hashPassword = await bcyrpt.hash(userPassword, 10);
      let newUsers = new UsersApps({
        name: name,
        firstName: firstName,
        email: email,
        role: role,
        password: hashPassword,
      });
      let result = await newUsers.save();

      res.json({
        message: "utilisateur ajouter",
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

const loginUsersApps = async (req, res) => {
  try {
    let { email, password } = req.body;
    let UsersApps = await UsersApps.findOne({ email: email });
    if (UsersApps) {
      let valid = await bcyrpt.compare(password, UsersApps.password);
      if (valid) {
        let token = jwt.sign(
          {
            id: UsersApps._id,
            role: UsersApps.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );
        res.json({
          message: "Bienvenue",
          success: true,
          token: token,
        });
      } else {
        res.json({
          message: "Email ou mot de passe incorrect ! ",
          success: false,
        });
      }
    } else {
      res.json({
        message: "Email ou mot de passe incorrect",
        success: false,
      });
    }
  } catch (error) {}
};

const getAllUsersApps = async (req, res) => {
  try {
    let usersApp = await UsersApps.find({});
    res.json({
      message: usersApp,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
module.exports = { registerUsersApps, loginUsersApps,getAllUsersApps };
