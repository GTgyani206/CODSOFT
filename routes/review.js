const express = require('express');
const router = express.Router();
const { isLoggedIn, validateReview } = require('../middleware');
const reviewController = require('../controllers/review');

// POST route for creating a review
router.post('/', isLoggedIn, validateReview, reviewController.createReview);

// DELETE route for deleting a review
router.delete('/:reviewId', isLoggedIn, reviewController.deleteReview);

module.exports = router;
