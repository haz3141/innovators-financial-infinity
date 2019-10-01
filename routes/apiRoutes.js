var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // GET ALL USERS
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/charts", function(req, res) {
    db.Coin.findAll({}).then(function(examples) {
      res.json(examples);
    });
  });

  app.post("/api/charts", function(req, res) {
    console.log(req.body);
    db.Coin.create({
      image: req.body.image,
      symbol: req.body.symbol,
      currentprice: req.body.currentprice,
      volume: req.body.volume,
      change: req.body.change
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/graphs", function(req, res) {
    db.Graph.findAll({}).then(function(examples) {
      res.json(examples);
    });
  });

  app.post("/api/graphs", function(req, res) {
    console.log(req.body);
    db.Graph.create({
      price: req.body.price,
      current_time: req.body.current_time
    }).then(function(results) {
      res.json(results);
    });
  });

  // app.delete('/api/examples/:id', function(req, res) {
  //   db.Coin.destroy({where: { id: req.params.id } }).then(function(
  //     example
  //   ) {
  //     res.json(example)
  //   })
  // })

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
