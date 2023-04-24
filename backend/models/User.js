const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default:
        "https://th.bing.com/th?id=OIP.ZT-Tw8tYy38htqch69vsGQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    adress: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
