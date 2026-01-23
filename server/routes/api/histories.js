const express = require("express");
const router = express.Router();
const historyModule = require("../../modules/history/historyController");

/**
 * @route POST api/history/following
 * @description Get following history items
 * @access Public
 */
router.post("/following", historyModule.GetFollowing);

/**
 * @route POST api/history/sales
 * @description Get sales history items
 * @access Public
 */
router.post("/sales", historyModule.GetSales);

/**
 * @route POST api/history/bidding
 * @description Get bidding history items
 * @access Public
 */
router.post("/bidding", historyModule.GetBidding);

module.exports = router;
