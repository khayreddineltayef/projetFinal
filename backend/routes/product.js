const express = require("express");
const { verifyAdmin } = require("../middlewares/verifiyToken");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  findProduct,
  getAll,
  getNewProducts,
  getByCategory,
  PromoProducts,
} = require("../controllers/product.controller");
const router = express.Router();
router.post("/add", verifyAdmin, addProduct);
router.put("/update/:id", verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);
router.get("/find/:id", findProduct);
router.get("/getAll", getAll);
router.get("/new", getNewProducts);
router.get("/category", getByCategory);
router.get("/promo", PromoProducts);
module.exports = router;
