const config = require("config");
const User = require("../models/User");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

exports.verifiyAuth = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "Invalid token" });
    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "unauthorized" });
    } else {
      req.user = user;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.verifyTokenAndAuthorization = (req, res, next) => {
  this.verifiyAuth(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
//

//
exports.verifyAdmin = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "Invalid token" });
    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "unauthorized" });
    } else if (!user.isAdmin) {
      return res.status(403).json({ msg: "Forbidden" });
    } else {
      req.user = user;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//
exports.verifyToken2 = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
