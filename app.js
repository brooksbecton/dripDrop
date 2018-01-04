const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const firebaseMiddleware = require("express-firebase-middleware");
var admin = require("firebase-admin");

var serviceAccount = require("./keys/dripdrop-de1e0-firebase-adminsdk-jwaap-b32efb9ffb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dripdrop-de1e0.firebaseio.com"
});

require("dotenv").config();

const index = require("./routes/index");
const usersZip = require("./routes/usersZip");
const weather = require("./routes/weather");

const startJobs = require("./lib/jobs/index");

// Starting recurring jobs
startJobs();

const app = express();

// Middleware
app.use("/api", firebaseMiddleware.auth);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/api/usersZip", usersZip);
app.use("/api/weather", weather);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
