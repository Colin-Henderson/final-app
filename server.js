const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}!`));
