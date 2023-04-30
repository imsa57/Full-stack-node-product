const mongoose = require("mongoose");
const { Schema } = mongoose;

// title brand thumbnail price rating
const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: [0, "wrong price"] },
  discountPercentage: {
    type: Number,
    min: [0, "wrong price"],
    max: [70, "wrong max discount"],
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "wrong price"],
    max: [5, "wrong max discount"],
  },
  brand: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});
exports.Product = mongoose.model("Product", productSchema);
