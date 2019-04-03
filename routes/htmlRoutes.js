var db = require("../models");

var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  //login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/login.html"));
  });
  // register
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/register.html"));
  });
  // dashboard 
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/dashboard.html"));
  });
  // filemanager page
  app.get("/file-manager", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/file-manager.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/profile.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/contact.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
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
