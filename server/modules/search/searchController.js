const otherHelper = require("../../helper/others.helper");
const httpStatus = require("http-status");
const nftSchema = require("../nft/nftSchema");
const auctionSchema = require("../auction/auctionSchema");
const buySchema = require("../buy/buySchema");
const userSchema = require("../user/userSchema");
const searchController = {};

searchController.Search = async (req, res, next) => {
  try {
    const query = {};
    const nfts = await nftSchema
      .find({
        $text: {
          $search: req.body.keyword,
        },
      })
      .select("id");

    const nftIdsFromSearch = nfts.map((element) => element.id);

    query.nft = {
      $in: nftIdsFromSearch,
    };

    const auctions = await auctionSchema
      .find(query)
      .populate("nftInfo")
      .sort([["createdAt", 1]])
      .limit(5);
    const buys = await buySchema
      .find(query)
      .populate("nftInfo")
      .sort([["createdAt", 1]])
      .limit(5);
    auctions.push(...buys);
    auctions.sort(function (a, b) {
      return a.createdAt - b.createdAt;
    });

    const users = await userSchema
      .find({
        $text: {
          $search: req.body.keyword,
        },
      })
      .populate("wallets")
      .sort([["createdAt", 1]])
      .limit(5);

    return otherHelper.sendResponse(res, httpStatus.OK, {
      users: users,
      items: auctions,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = searchController;
