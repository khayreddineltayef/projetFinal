const mongoose = require("mongoose");
const config = require("config");
const db = config.get("db");
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("data base is connected succesufly");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
