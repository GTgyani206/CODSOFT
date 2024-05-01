const Listing = require("../models/listing.js");
const User = require("../models/user.js");

// Index route
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// Show Route
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
};

//favorite toggle route
module.exports.toggleFavorite = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  // Check if the user has already favorited the listing
  const userFavorited = listing.favorites.includes(req.user.id);

  if (userFavorited) {
    // Remove the user from the favorites array
    listing.favorites = listing.favorites.filter(
      (userId) => userId.toString() !== req.user.id.toString()
    );
  } else {
    // Add the user to the favorites array
    listing.favorites.push(req.user.id);
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
};

//Cart toggler
module.exports.toggleCart = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  //check if user have already added the item to cart
  const userCart = listing.cart.includes(req.user.id);

  if (userCart) {
    //remove the item from the cart
    listing.cart = listing.cart.filter(
      (userId) => userId.toString() !== req.user.id.toString()
    );
  } else {
    //add the item to the cart
    listing.cart.push(req.user.id);
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
  };