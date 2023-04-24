const express = require("express");
const connectDB = require("./config/connectDB");

const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");

const cors = require("cors");

const app = express();
// const config = require("config");
// const port = config.get("PORT");
app.use(express.json());
app.use(cors());
app.use("/user", user);
app.use("/product", product);
app.use("/cart", cart);
connectDB();
// const PORT = port || 5000;
app.listen(5000, (error) =>
  error
    ? console.error(error)
    : console.log(`server is runing in the port 5000`)
);
