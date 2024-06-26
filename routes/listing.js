const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const listingController = require("../controllers/listing.js");

router.get("/", wrapAsync(listingController.index)); // Index route

router.get("/:id", wrapAsync(listingController.showListing)); // Show route

router.post('/:id/favorite', listingController.toggleFavorite); //toggle favorite route

router.post('/:id/cart', listingController.toggleCart);//toggle cart route

module.exports = router;
