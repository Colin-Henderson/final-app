const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, min: 1, max: 5, required: true },
  comments: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;