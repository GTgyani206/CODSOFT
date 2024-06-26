const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String },
  favourite: { type: Boolean, default: false },
  cartItm: { type: Boolean, default: false },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
