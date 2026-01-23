const express = require("express");
const router = express.Router();
const auctionModule = require("../../modules/auction/auctionController");

/**
 * @route POST api/auction/auction
 * @description Auction nft
 * @access Public
 */
router.post("/auction", auctionModule.Auction);

/**
 * @route POST api/auction/bid
 * @description Bid auction nft
 * @access Public
 */

router.post("/bid", auctionModule.Bid);

/**
 * @route POST api/auction/get
 * @description Get auctions
 * @access Public
 */
router.post("/get", auctionModule.Get);

/**
 * @route POST api/auction/popular
 * @description Get popular assets
 * @access Public
 */
router.post("/popular", auctionModule.Popular);

/**
 * @route POST api/auction/find
 * @description Get auction
 * @access Public
 */
router.post("/find", auctionModule.Find);


module.exports = router;
