const User = require("../models/user.model");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    let { name, firstName, email, role, userPassword } = req.body;
    let existingUser = await User.findOne({
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
      let newUser = new User({
        name: name,
        firstName: firstName,
        email: email,
        role: role,
        password: hashPassword,
      });
      let result = await newUser.save();

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

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      let valid = await bcyrpt.compare(password, user.password);
      if (valid) {
        let token = jwt.sign(
          {
            id: user._id,
            role: user.role,
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

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});
    res.json({
      message: users,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
module.exports = { registerUser, loginUser,getAllUsers };
