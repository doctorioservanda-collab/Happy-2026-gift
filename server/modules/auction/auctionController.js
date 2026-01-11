const httpStatus = require("http-status");
const otherHelper = require("../../helper/others.helper");
const auctionSchema = require("./auctionSchema");
const bidSchema = require("../bid/bidSchema");
const transactionSchema = require("../transaction/transactionSchema");
const nftSchema = require("../nft/nftSchema");
const historySchema = require("../history/historySchema");

const auctionController = {};

auctionController.Auction = async (req, res, next) => {
  try {
    const data = new auctionSchema({
      market: req.body.market,
      nft: req.body.nft,
      seller: req.body.seller,
      buyer: req.body.buyer,
      price: req.body.price,
      period: req.body.period,
      state: req.body.state,
      supply: req.body.supply,
    });
    await data.save();
    await new historySchema({
      market: req.body.market,
      nft: req.body.nft,
      type: "List",
      auction: data._id,
      supply: req.body.supply,
      price: req.body.price,
      creator: req.body.seller,
    }).save();
    return otherHelper.sendResponse(res, httpStatus.OK, { auction: data });
  } catch (err) {
    next(err);
  }
};

auctionController.Bid = async (req, res, next) => {
  try {
    const { market, bidder, state, price, supply, contract, hash, nft } =
      req.body;
    const auction = await auctionSchema.findOne({ market: market });

    const bid = await new bidSchema({
      auction: auction._id,
      bidder: bidder,
      state: state,
      price: price,
      supply: supply,
    }).save();

    if (auction.bids) {
      auction.bids.push(bid._id);
    } else {
      auction.bids = [bid._id];
    }
    auction.state = 1;
    await auction.save();

    await new transactionSchema({
      to: contract,
      from: bidder,
      nft: nft,
      price: price,
      supply: supply,
      transactionHash: hash,
    }).save();

    await new historySchema({
      market: auction.market,
      nft: auction.nft,
      type: "Bid",
      auction: auction._id,
      price: price,
      supply: supply,
      creator: bidder,
    }).save();

    return otherHelper.sendResponse(res, httpStatus.OK, { message: "SUCCESS" });
  } catch (err) {
    next(err);
  }
};

auctionController.Get = async (req, res, next) => {
  try {
    let nftIds = [];
    let nftIdsFromSearch = [];
    let nftIdsFromCategory = [];
    let query = { state: { $in: [0, 1] } };
    let sort = ["createAt", "1"];

    if (req.body.sort) {
      sort = req.body.sort;
    }

    if (req.body.keyword) {
      const nfts = await nftSchema
        .find({
          $text: {
            $search: req.body.keyword,
          },
        })
        .select("id");
      if (nfts.length) {
        nftIdsFromSearch = nfts.map((element) => element.id);
        nftIds.push(...nftIdsFromSearch);
      }

      query.nft = {
        $in: nftIds,
      };
    }

    if (req.body.category) {
      const nfts = await nftSchema
        .find({ category: req.body.category })
        .select("id");
      if (nfts.length) {
        nftIdsFromCategory = nfts.map((element) => element.id);
      }

      if (req.body.keyword) {
        if (nftIds.length) {
          const realItems = nftIds.filter((element) =>
            nftIdsFromCategory.includes(element)
          );
          nftIds = realItems;
        }
      } else {
        nftIds.push(...nftIdsFromCategory);
      }

      query.nft = {
        $in: nftIds,
      };
    }
    const auctions = await auctionSchema
      .find(query)
      .sort([sort])
      .populate({
        path: "sellerInfo",
        populate: {
          path: "user",
        },
      })
      .populate("nftInfo")
      .limit(req.body.limit ?? 12);
    const result = [];
    for (let i = 0; i < auctions.length; i++) {
      const row = auctions[i].toObject();
      const bids = await bidSchema
        .find({ auction: row._id })
        .sort([["price", 1]])
        .populate({
          path: "bidderInfo",
          populate: {
            path: "user",
          },
        });
      row.bids = bids;
      result.push(row);
    }
    return otherHelper.sendResponse(res, httpStatus.OK, { auctions: result });
  } catch (err) {
    next(err);
  }
};

auctionController.Popular = async (req, res, next) => {
  try {
    return otherHelper.sendResponse(res, httpStatus.OK, { auctions: data });
  } catch (err) {
    next(err);
  }
};



auctionController.Find = async (req, res, next) => {
  try {
    const { id } = req.body;
    const data = await auctionSchema
      .findOne({ market: id })
      .populate({
        path: "sellerInfo",
        populate: {
          path: "user",
        },
      })
      .populate({
        path: "nftInfo",
        populate: [
          {
            path: "creatorInfo",
            populate: {
              path: "user",
            },
          },
          {
            path: "owners",
            populate: {
              path: "ownerInfo",
              populate: "user",
            },
          },
        ],
      });
    if (data) {
      const result = data.toObject();
      const bids = await bidSchema
        .find({ auction: data._id })
        .sort([["price", 1]])
        .populate({
          path: "bidderInfo",
          populate: {
            path: "user",
          },
        });
      result.bids = bids;

      const histories = await historySchema.find({ nft: data.nft }).populate({
        path: "creatorInfo",
        populate: {
          path: "user",
        },
      });
      result.histories = histories;
      return otherHelper.sendResponse(res, httpStatus.OK, { auction: result });
    } else {
      return otherHelper.sendResponse(res, httpStatus.OK, { auction: data });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = auctionController;
