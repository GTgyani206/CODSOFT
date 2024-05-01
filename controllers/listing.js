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
  const userFavorited = listing.favorites.includes(req.user._id);

  if (userFavorited) {
    // Remove the user from the favorites array
    listing.favorites = listing.favorites.filter(
      (userId) => userId.toString() !== req.user._id.toString()
    );
  } else {
    // Add the user to the favorites array
    listing.favorites.push(req.user._id);
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
};


//Cart toggler
module.exports.toggleCart = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  // Check if the user is already in the cart
  const index = listing.cart.indexOf(req.user._id);

  if (index !== -1) {
    // User is in the cart, remove them
    listing.cart.splice(index, 1);
  } else {
    // User is not in the cart, add them
    listing.cart.push(req.user._id);
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
};

