/*******************************************************
 *      Server Starts From Here                        *
 *******************************************************/
"use strict";

require("dotenv").config();
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3003;
const env = process.env.NODE_ENV || "development";
const server = http.createServer(app);

app.set("PORT_NUMBER", port);

//  Start the app on the specific interface (and port).
server.listen(port, () => {
  // Keep the visual separator for development
  if (env === 'development') {
    console.log(`Server is running on ${port} successfully!`);
  }
});

module.exports = server;
