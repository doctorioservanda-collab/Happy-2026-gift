const express = require("express");
const router = express.Router();

//All route of users
const userRoutes = require("./api/users");
router.use("/user", userRoutes);

//All route of nfts
const nftRoutes = require("./api/nfts");
router.use("/nft", nftRoutes);

//All route of buys
const buyRoutes = require("./api/buys");
router.use("/buy", buyRoutes);

//All route of auctions
const auctionRoutes = require("./api/auctions");
router.use("/auction", auctionRoutes);

//All route of auctions
const searchRoutes = require("./api/search");
router.use("/search", searchRoutes);

//All route of bids
const bidRoutes = require("./api/bids");
router.use("/bid", bidRoutes);

//All route of histories
const historyRoutes = require("./api/histories");
router.use("/history", historyRoutes);                                                                                                                                                           																												

module.exports = router;        