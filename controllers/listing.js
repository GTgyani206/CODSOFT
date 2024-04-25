const Listing = require("../models/listing.js");

//index route
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};
//Show Route
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  res.render("listings/show.ejs", { listing });
};

// favorite route
module.exports.favourite = async (req, res) => {
  res.render("listings/favourite.ejs");
};
