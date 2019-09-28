// const authController = require("../controllers/authController");

// module.exports = function(app, passport) {
//   app.get("/signup", authController.signup);

//   app.get("/signin", authController.signin);

//   app.post(
//     "/signup",
//     passport.authenticate("local-signup", {
//       successRedirect: "/dashboard",

//       failureRedirect: "/signup"
//     })
//   );

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect : "/dashboard",

      failureRedirect : "/signup"
    })
  );


//   app.get("/dashboard", isLoggedIn, authController.dashboard);


//   app.get("/logout", authController.logout);

//   app.post(
//     "/login",
//     passport.authenticate("logged-in", {
//       successRedirect: "/dashboard",

//       failureRedirect: "/login-in"
//     })
//   );

//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }

  app.get("/trade", isLoggedIn, authController.trade);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect : "/dashboard",

      failureRedirect : "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();


//     res.redirect("/signin");
//   }
// };
