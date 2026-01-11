const express = require("express");
const router = express.Router();
const nftModule = require("../../modules/nft/nftController");

/**
 * @route GET api/nft/total-mint-count
 * @description Get total minted nft count
 * @access Public
 */
router.get("/total-mint-count", nftModule.GetTotalMintCount);

/**
 * @route POST api/nft/create
 * @description Mint nft
 * @access Public
 */
router.post("/create", nftModule.Create);

/**
 * @route POST api/nft/created
 * @description Get created nfts by user
 * @access Public
 */
router.post("/created", nftModule.Created);

module.exports = router;
