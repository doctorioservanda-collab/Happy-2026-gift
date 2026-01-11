const express = require("express");
const router = express.Router();
const searchModule = require("../../modules/search/searchController");

/**
 * @route GET api/search/search
 * @description Get total filtered items
 * @access Public
 */
router.post("/search", searchModule.Search);

module.exports = router;
