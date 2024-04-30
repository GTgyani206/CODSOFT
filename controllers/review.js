const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async (req, res, next) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("back");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    req.flash("success", "Successfully added a new review!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    let { id, reviewId } = req.params;

    // Find the listing and remove the review from its reviews array
    let listing = await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("back");
    }

    // Delete the review document
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Successfully deleted review!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};
