var db = require("../models");

// eslint-disable-next-line no-unused-vars
module.exports = function(app, passport) {
<<<<<<< HEAD
=======
  app.get("/", function(req, res) {
    res.render("index");
  });

>>>>>>> ac4bb1fb2d03be3c25ec3ecef1d05463b186eb94
  app.get("/landing", function(req, res) {
    res.render("landing");
  });

  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  app.get("/charts", function(req, res) {
    res.render("charts");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
