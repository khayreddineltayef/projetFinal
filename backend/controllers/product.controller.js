//CREATE

const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET PRODUCT
exports.findProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL PRODUCTS
// exports.getAll = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
//get new products for the home page

exports.getNewProducts = async (req, res) => {
  try {
    const products = await Product.find({ promoCode: null })
      .sort({ createdAt: -1 })
      .limit(4);
    res.status(200).json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//getting the latest product added that have a promoCode

// Route to get last 4 products added with a promo code
exports.PromoProducts = async (req, res) => {
  try {
    const promoProducts = await Product.find({ promoCode: { $ne: null } })
      .sort({ createdAt: -1 })
      .limit(4);
    res.status(200).json(promoProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getting products by category
exports.getByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const products = await Product.find({ categories: category });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
