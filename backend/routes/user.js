const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  getAll,
  getUser,
  deleteUser,
  getStats,
  auth,
  logout,
} = require("../controllers/user.controller");
const { registerRules, validaorr } = require("../middlewares/validator");
const {
  verifiyAuth,
  verifyAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifiyToken");

router.post("/register", registerRules(), validaorr, register);
router.post("/login", login);
router.get("/auth", verifiyAuth, auth);

router.put("/update/:id", verifiyAuth, update);
router.get("/", verifyAdmin, getAll);
router.get("/find/:id", verifyAdmin, getUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/stats", verifyAdmin, getStats);
module.exports = router;
