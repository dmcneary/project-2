var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "web dev is hard", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/* Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");*/

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
