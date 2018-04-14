const router = require("express").Router();
const reviewRoutes = require("./reviews");

// review routes
router.use("/reviews", reviewRoutes);

module.exports = router;