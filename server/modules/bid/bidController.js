const httpStatus = require("http-status");
const otherHelper = require("../../helper/others.helper");
const bidSchema = require("./bidSchema");
const auctionSchema = require("../auction/auctionSchema");

const bidController = {};

bidController.Received = async (req, res, next) => {
  try {
    const { address } = req.body;
    const auctions = await auctionSchema.find({ seller: address, state: 1 });

    const auctionIds = auctions.map((element) => element._id);
    const bids = await bidSchema
      .find({
        auction: {
          $in: auctionIds,
        },
      })
      .populate({
        path: "auction",
        populate: {
          path: "nftInfo",
        },
      });
    return otherHelper.sendResponse(res, httpStatus.OK, { bids: bids });
  } catch (err) {
    next(err);
  }
};

bidController.Made = async (req, res, next) => {
  try {
    const { address } = req.body;
    const bids = await bidSchema.find({ bidder: address }).populate({
      path: "auction",
      populate: {
        path: "nftInfo",
      },
    });
    return otherHelper.sendResponse(res, httpStatus.OK, { bids: bids });
  } catch (err) {
    next(err);
  }
};

module.exports = bidController;
