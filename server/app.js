"use strict";
require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const requestIp = require("request-ip");
const loggerHelper = require("./helper/logger.helper");
const passport = require("passport");
const hpp = require("hpp");
const httpStatus = require("http-status");
const otherHelper = require("./helper/others.helper");
const { AddErrorToLogs } = require("./modules/bug/bugController");
const changephoto = require("./helper/photomanipulate").changephoto;
const app = express();

// Add request logging middleware
app.use(loggerHelper.logRequest);
// Body parser middleware
// create application/json parser
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
// create application/x-www-form-urlencoded parser
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
// protect against HTTP Parameter Pollution attacks
app.use(hpp());

app.use(
  cookieSession({
    name: "session",
    keys: ["SECRECTKEY"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(cookieParser());

// Passport middleware
app.use(passport.initialize());

// CORS setup for dev
app.use(function (req, res, next) {
  req.client_ip_address = requestIp.getClientIp(req);
  loggerHelper.requestLogger.debug({
    ip: req.client_ip_address,
    origin: req.get('Origin'),
    method: req.method,
    url: req.url
  }, 'CORS middleware processing request');
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT, PATCH");
  next();
});

const routes = require("./routes/index");

// Add a simple health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Use Routes
app.use("/api", routes);
app.use("/public/:w-:h/*", changephoto);
app.use("/public", express.static(path.join(__dirname, "public")));
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  loggerHelper.errorLogger.warn({
    method: req.method,
    url: req.url,
    ip: req.client_ip_address,
    userAgent: req.get('User-Agent')
  }, 'Route not found - 404');
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
  if (err.status === 404) {
    loggerHelper.errorLogger.warn({
      error: err.message,
      method: req.method,
      url: req.url,
      ip: req.client_ip_address
    }, 'Route not found');
    
    return otherHelper.sendResponse(
      res,
      httpStatus.NOT_FOUND,
      false,
      null,
      err,
      "Route Not Found",
      null
    );
  } else {
    // Use structured logging instead of console.log
    loggerHelper.logError(err, req, {
      path: req.baseUrl + (req.route && req.route.path),
      method: req.method,
      body: req.body,
      params: req.params,
      query: req.query
    });
    
    let path = req.baseUrl + req.route && req.route.path;
    if (path.substr(path.length - 1) === "/") {
      path = path.slice(0, path.length - 1);
    }
    err.method = req.method;
    err.path = req.path;
    AddErrorToLogs(req, res, next, err);
    return otherHelper.sendResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      false,
      null,
      err,
      null,
      null
    );
  }
});

module.exports = app;
