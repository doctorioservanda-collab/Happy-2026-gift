const httpStatus = require("http-status");
const otherHelper = require("../../helper/others.helper");
const buySchema = require("./buySchema");
const ownerSchema = require("../owner/ownerSchema");
const transactionSchema = require("../transaction/transactionSchema");
const nftSchema = require("../nft/nftSchema");
const historySchema = require("../history/historySchema");

const buyController = {};

buyController.Buy = async (req, res, next) => {
  try {
    const data = new buySchema({
      market: req.body.market,
      nft: req.body.nft,
      seller: req.body.seller,
      buyer: req.body.buyer,
      price: req.body.price,
      state: req.body.state,
      supply: req.body.supply,
    });
    await data.save();
    await new historySchema({
      market: req.body.market,
      nft: req.body.nft,
      type: "List",
      buy: data._id,
      supply: req.body.supply,
      price: req.body.price,
      creator: req.body.seller,
    }).save();
    return otherHelper.sendResponse(res, httpStatus.OK, { buy: data });
  } catch (err) {
    next(err);
  }
};

buyController.Sell = async (req, res, next) => {
  try {
    const { market, buyer, seller, supply, nft, hash, price } = req.body;

    const buy = await buySchema.updateOne(
      { market: market },
      {
        state: 2,
        buyer: buyer,
      }
    );

    await ownerSchema.updateOne(
      { supply: supply, owner: seller, nft: nft },
      {
        owner: buyer,
      }
    );

    await new transactionSchema({
      to: buyer,
      from: seller,
      nft: nft,
      price: price,
      supply: supply,
      transactionHash: hash,
    }).save();

    await new historySchema({
      market: market,
      nft: nft,
      type: "Purchase",
      buy: buy._id,
      price: price,
      supply: supply,
      creator: buyer,
    }).save();

    return otherHelper.sendResponse(res, httpStatus.OK, { message: "OK" });
  } catch (err) {
    next(err);
  }
};

buyController.Get = async (req, res, next) => {
  try {
    let nftIds = [];
    let nftIdsFromSearch = [];
    let nftIdsFromCategory = [];
    let query = { state: "0" };
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

    const data = await buySchema
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
    return otherHelper.sendResponse(res, httpStatus.OK, { buys: data });
  } catch (err) {
    next(err);
  }
};

buyController.Find = async (req, res, next) => {
  try {
    const { id } = req.body;
    const data = await buySchema
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
      const histories = await historySchema.find({ nft: data.nft }).populate({
        path: "creatorInfo",
        populate: {
          path: "user",
        },
      });
      result.histories = histories;
      return otherHelper.sendResponse(res, httpStatus.OK, { buy: result });
    } else {
      return otherHelper.sendResponse(res, httpStatus.OK, { buy: data });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = buyController;
