const express = require("express");
const router = express.Router();
const userModule = require("../../modules/user/userController");

// router.post('/detail/:id', userModule.)

/**
 * @route POST api/user/register
 * @description Register user route
 * @access Public
 */
router.post("/register", userModule.Register);

/**
 * @route POST api/user/update
 * @description Update user route
 * @access Public
 */

router.post("/search", userModule.Search);

/**
 * @route POST api/user/follow
 * @description Update user route
 * @access Public
 */

router.post("/follow", userModule.Follow);

/**
 * @route POST api/user/follow
 * @description Update user route
 * @access Public
 */

router.post("/check", userModule.Check);

/**
 * @route POST api/user/update
 * @description Update user route
 * @access Public
 */

router.post("/update", userModule.Update);

/**
 * @route GET api/user/total-count
 * @description Get total user count
 * @access Public
 */
router.get("/total-count", userModule.GetTotalUserCount);

/**
 * @route GET api/user/featured-users
 * @description Get featured user count
 * @access Public
 */
router.get("/featured-users", userModule.GetFeaturedUsers);

module.exports = router;
