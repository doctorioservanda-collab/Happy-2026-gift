const express = require("express");
const router = express.Router();
const buyModule = require("../../modules/buy/buyController");

/**
 * @route POST api/buy/buy
 * @description Buy nft
 * @access Public
 */
router.post("/buy", buyModule.Buy);

/**
 * @route POST api/buy/Sell
 * @description Confirm buy nft
 * @access Public
 */
router.post("/sell", buyModule.Sell);

/**
 * @route POST api/buy/get
 * @description Get buy items
 * @access Public
 */
router.post("/get", buyModule.Get);

/**
 * @route POST api/buy/find
 * @description Get buy item
 * @access Public
 */
router.post("/find", buyModule.Find);

module.exports = router;
