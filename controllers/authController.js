var exports = (module.exports = {});
var db = require("../models");

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.charts = function(req, res) {
  res.render("charts");
};

exports.trade = function(req, res) {
  console.log("req", req.session.passport.user);
  let currentUser = req.session.passport.user;
  // console.log("res::::", res);
  // res.render("trade");
  db.User.findOne({ where: {id: currentUser}}).then(function(dbUsers) {
    // console.log(dbUsers);
    res.render("trade", {
      msg: "Trade!",
      users: dbUsers
    });
  });
};

exports.logout = function(req, res) {
  // eslint-disable-next-line no-unused-vars
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
