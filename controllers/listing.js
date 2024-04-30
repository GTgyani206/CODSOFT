const Listing = require("../models/listing.js");

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
  const userFavorited = listing.favorites.includes(currUser._id);

  if (userFavorited) {
    // Remove the user from the favorites array
    listing.favorites = listing.favorites.filter(
      (userId) => userId.toString() !== currUser._id.toString()
    );
  } else {
    // Add the user to the favorites array
    listing.favorites.push(currUser._id);
  }

  await listing.save();
  res.redirect(`/listings/${id}`);
};
