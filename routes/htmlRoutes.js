var db = require("../models");

var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
  });
  // login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/login.html"));
  });
  /* register (not used, sign up from index page)
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/register.html"));
  });*/
  // dashboard 
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/dashboard.html"));
  });

  /* filemanager page
  app.get("/file-manager", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/file-manager.html"));
  });*/

  // app.get("/profile", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../components/profile.html"));
  // });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../components/contact.html"));
  });

};
