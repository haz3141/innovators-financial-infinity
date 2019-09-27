const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const bcrypt = require("bcryptjs");
const passport = require("passport");

// User model
// eslint-disable-next-line no-unused-vars
const User = require("../models/User");

// Login Page
router.get("/signin", (req, res) => res.render("Signin"));

// Register Page
router.get("/signup", (req, res) => res.render("Signup"));

// Register Handle
router.post("/signup", (req, res) => {
  const { firstname, lastname, email, password, password2 } = req.body;
  let errors = [];

  //Check required fields
  if (!firstname || !lastname || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  // Check password length
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      firstname,
      lastname,
      email,
      password,
      password2
    });
  } else {
    // Validation passed
    User.findOne({ email: email }).then(user => {
      if (user) {
        // User exists
        errors.push({ msg: "Email is already registered" });
        res.render("register", {
          errors,
          firstname,
          lastname,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          firstname,
          lastname,
          email,
          password
        });

        // Hash Password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // eslint-disable-next-line curly
            if (err) throw err;
            // Set password to hashed
            newUser.password = hash;
            // Save user
            newUser
              .save()
              // eslint-disable-next-line no-unused-vars
              .then(user => {
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.redirect("/signin");
              })
              .catch(err => console.log(err));
          })
        );
      }
    });
  }
});

// Login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

// Logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/users/login");
});

module.exports = router;
