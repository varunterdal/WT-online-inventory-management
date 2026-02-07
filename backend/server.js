const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/inventory")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// -------------------- APIs --------------------

// GET all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD new product
app.post("/product/add", async (req, res) => {
  const { name, category, price, quantity } = req.body;

  if (!name || !category || price == null || quantity == null) {
    return res.status(400).send("Please provide all product details");
  }
  if (quantity < 0 || price < 0) return res.status(400).send("Values cannot be negative");

  const newProduct = new Product({ name, category, price, quantity });
  await newProduct.save();
  res.send("Product added successfully");
});

// UPDATE product
app.put("/product/update/:id", async (req, res) => {
  const { name, category, price, quantity } = req.body;
  if (quantity < 0 || price < 0) return res.status(400).send("Values cannot be negative");

  await Product.findByIdAndUpdate(req.params.id, { name, category, price, quantity });
  res.send("Product updated successfully");
});

// DELETE product
app.delete("/product/delete/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product deleted successfully");
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
