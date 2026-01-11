const express = require("express");
const router = express.Router();
const bidModule = require("../../modules/bid/bidController");

/**
 * @route GET api/bid/receive
 * @description Get received offers
 * @access Public
 */
router.post("/received", bidModule.Received);

/**
 * @route GET api/bid/made
 * @description Get made offers
 * @access Public
 */
router.post("/made", bidModule.Made);

module.exports = router;
