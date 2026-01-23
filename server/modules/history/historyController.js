const httpStatus = require("http-status");
const walletSchema = require("../wallet/walletSchema");
const otherHelper = require("../../helper/others.helper");
const historySchema = require("./historySchema");

const historyController = {};

historyController.GetFollowing = async (req, res, next) => {
  try {
    const { account } = req.body;
    let response = [];
    const user = await walletSchema.findOne({ wallet: account }).populate({
      path: "user",
      populate: {
        path: "following",
        populate: "wallets",
      },
    });

    if (user.user.following && user.user.following.length) {
      let wallets = [];
      for (let i = 0; i < user.user.following.length; i++) {
        const following = user.user.following[i];
        for (let j = 0; j < following.wallets.length; j++) {
          const wallet = following.wallets[j];
          wallets.push(wallet.wallet);
        }
      }

      response = await historySchema
        .find({
          creator: {
            $in: wallets,
          },
          type: "Following",
        })
        .populate({
          path: "creatorInfo",
          populate: "user",
        })
        .populate({
          path: "following",
          populate: "wallets",
        });
    }
    return otherHelper.sendResponse(res, httpStatus.OK, {
      following: response,
    });
  } catch (err) {
    next(err);
  }
};

historyController.GetBidding = async (req, res, next) => {
  try {
    const { account } = req.body;
    let response = [];
    const user = await walletSchema.findOne({ wallet: account }).populate({
      path: "user",
      populate: {
        path: "following",
        populate: "wallets",
      },
    });

    if (user.user.following && user.user.following.length) {
      let wallets = [];
      for (let i = 0; i < user.user.following.length; i++) {
        const following = user.user.following[i];
        for (let j = 0; j < following.wallets.length; j++) {
          const wallet = following.wallets[j];
          wallets.push(wallet.wallet);
        }
      }

      response = await historySchema
        .find({
          creator: {
            $in: wallets,
          },
          type: "Bid",
        })
        .populate({
          path: "auction",
          populate: "nftInfo",
        })
        .populate({
          path: "creatorInfo",
          populate: "user",
        });
    }
    return otherHelper.sendResponse(res, httpStatus.OK, { bidding: response });
  } catch (err) {
    next(err);
  }
};

historyController.GetSales = async (req, res, next) => {
  try {
    const { account } = req.body;
    let response = [];
    const user = await walletSchema.findOne({ wallet: account }).populate({
      path: "user",
      populate: {
        path: "following",
        populate: "wallets",
      },
    });

    if (user.user.following && user.user.following.length) {
      let wallets = [];
      for (let i = 0; i < user.user.following.length; i++) {
        const following = user.user.following[i];
        for (let j = 0; j < following.wallets.length; j++) {
          const wallet = following.wallets[j];
          wallets.push(wallet.wallet);
        }
      }

      response = await historySchema
        .find({
          creator: {
            $in: wallets,
          },
          type: {
            $in: ["List", "Purchase"],
          },
        })
        .populate({
          path: "buy",
          populate: "nftInfo",
        })
        .populate({
          path: "auction",
          populate: "nftInfo",
        })
        .populate({
          path: "creatorInfo",
          populate: "user",
        });
    }
    return otherHelper.sendResponse(res, httpStatus.OK, { sales: response });
  } catch (err) {
    next(err);
  }
};
module.exports = historyController;
