const jwtDecode = require("jwt-decode");

const verifRole = (req, res, next) => {
  let token = req.headers["access_token"];
  if (!token) {
    res.status(400).json({
      success: false,
      message: "Aucun Token ",
    });
  } else {
    let decoded = jwtDecode(token);
    let { role } = decoded;
    if (role === "ADMIN") {
      next();
    } else {
      res.status(400).json({
        success: false,
        message: "T'es pas autorisé ",
      });
    }
  }
};

module.exports = verifRole ; 