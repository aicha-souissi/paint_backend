const jwt = require("jsonwebtoken");

const verifToken = (req, res, next) => {
  const token = req.headers["access_token"];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Aucun Token",
    });
  } else {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      req.user = verified;
      next();
    } else {
      res.status(400).json({
        success: false,
        message: "Token Invalide ! ",
      });
    }
  }
};

module.exports = verifToken ; 