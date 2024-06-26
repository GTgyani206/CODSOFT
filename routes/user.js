const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.renderSignUpForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectURL,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

// Customer Service
router.get("/customerService", userController.rendercustomerService);

//News Letter
router.get("/newsletter", userController.rendernewsletter);

// Logout
router.get("/logout", userController.logout);

//favourite route
router.get('/favorites', userController.getFavorites);

//cart route
router.get("/cart", userController.rendercart);

module.exports = router;
