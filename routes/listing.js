const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");

const listingController = require("../controllers/listing.js");

router
  .route("/")
  //index route
  .get(listingController.index);

module.exports = router;
