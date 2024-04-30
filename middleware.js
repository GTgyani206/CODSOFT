const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema.js");

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // If user is not logged in, redirect to login page or send an error response
    req.flash("error", "You must be logged in to access this page.");
    return res.redirect("/login"); // Redirect to your login route
  }
  // If user is logged in, proceed to the next middleware or route handler
  next();
};


module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// module.exports.isReviewAuthor = async (req, res, next) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   if (!listing.author.equals(req.user._id)) {
//     req.flash("error", "You do not have permission to do that.");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// }

module.exports.saveRedirectURL = (req, res, next) => {
  if (req.session.redirectURL) {
    res.locals.redirectURL = req.session.redirectURL;
  }
  next();
};
