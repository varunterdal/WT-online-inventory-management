const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model("Product", ProductSchema);
