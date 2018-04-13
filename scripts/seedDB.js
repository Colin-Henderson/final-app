const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pizzareviews",
  {
    useMongoClient: true
  }
);

const goodReview = [
  {
    name: "The Dough Boy",
    stars: 5,
    comments:
      "A one of a kind Pie!",
    date: new Date(Date.now())
  }
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(goodReview))
  .then(data => {
    console.log(data.insertedIds.length + " review left!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
