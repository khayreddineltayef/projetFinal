const express = require("express");
const { verifiyAuth } = require("../middlewares/verifiyToken");
const { addCart } = require("../controllers/cart.controller");
const router = express.Router();
router.post("/add", verifiyAuth, addCart);
module.exports = router;
