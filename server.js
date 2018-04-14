const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect("mongodb://localhost:27017/vgd");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}!`));
