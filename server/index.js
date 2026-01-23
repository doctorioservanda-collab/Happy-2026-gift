<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import userRoutes from './routes/user.js';
import nftRoutes from './routes/nft.js';
import auctionRoutes from './routes/auction.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger.logRequest);
// Routes
app.use('/api/users', userRoutes);
app.use('/api/nfts', nftRoutes);
app.use('/api/auctions', auctionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
=======
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
>>>>>>> 5973f71be44d517e2c57865895f1013d6759d72a
