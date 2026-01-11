const userSchema = require("./userSchema");
const walletSchema = require("../wallet/walletSchema");
const historySchema = require("../history/historySchema");
const httpStatus = require("http-status");
const otherHelper = require("../../helper/others.helper");
const userController = {};

userController.Register = async (req, res, next) => {
  try {
    const { wallet } = req.body;
    const user = await walletSchema.findOne({ wallet: wallet });

    if (!user) {
      const newUser = new userSchema();
      await newUser.save();

      const newWallet = new walletSchema();
      newWallet.wallet = wallet;
      newWallet.user = newUser._id;
      await newWallet.save();
    }
    // const data = await walletSchema.findOne({ wallet: wallet}).populate('user');

    const data = await walletSchema.findOne({ wallet: wallet }).populate({
      path: "user",
      populate: [
        {
          path: "following",
          populate: {
            path: "wallets",
          },
        },
        {
          path: "followers",
          populate: {
            path: "wallets",
          },
        },
      ],
    });
    return otherHelper.sendResponse(
      res,
      httpStatus.OK,
      { user: data },
      null,
      "user info"
    );
  } catch (err) {
    next(err);
  }
};

userController.Update = async (req, res, next) => {
  try {
    const { id, name, image, bio, email, facebook, twitter, instagram, web } =
      req.body;
    const user = await userSchema.updateOne(
      { _id: id },
      {
        name: name,
        bio: bio,
        image: image,
        email: email,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
        web: web,
      }
    );

    return otherHelper.sendResponse(res, httpStatus.OK, { user: user });
  } catch (err) {
    next(err);
  }
};

userController.GetTotalUserCount = async (req, res, next) => {
  try {
    const data = await userSchema.find().count();
    return otherHelper.sendResponse(res, httpStatus.OK, { total: data });
  } catch (err) {
    next(err);
  }
};

userController.GetFeaturedUsers = async (req, res, next) => {
  try {
    const data = await userSchema.find().populate("wallets").limit(12);
    return otherHelper.sendResponse(res, httpStatus.OK, { users: data });
  } catch (err) {
    next(err);
  }
};

userController.Follow = async (req, res, next) => {
  try {
    const { walletTo, walletFrom, flag } = req.body;
    const walletInfoTo = await walletSchema.findOne({ wallet: walletTo });
    const walletInfoFrom = await walletSchema.findOne({ wallet: walletFrom });

    const userIdTo = walletInfoTo.user;
    const userIdFrom = walletInfoFrom.user;

    const followerAvailable = await userSchema.find({
      _id: userIdTo,
      followers: userIdFrom,
    });

    const followingAvailable = await userSchema.find({
      _id: userIdFrom,
      following: userIdTo,
    });

    if (flag) {
      if (!followerAvailable.length) {
        await userSchema.updateOne(
          { _id: userIdTo },
          {
            $push: {
              followers: userIdFrom,
            },
          }
        );

        await new historySchema({
          type: "Following",
          creator: walletFrom,
          following: userIdTo,
        }).save();
      }

      if (!followingAvailable.length) {
        await userSchema.updateOne(
          { _id: userIdFrom },
          { $push: { following: userIdTo } }
        );
      }
    } else {
      if (followerAvailable.length) {
        // delete
        await userSchema.updateOne(
          { _id: userIdTo },
          { $pull: { followers: userIdFrom } }
        );
      }

      if (followingAvailable.length) {
        // delete
        await userSchema.updateOne(
          { _id: userIdFrom },
          { $pull: { following: userIdTo } }
        );
      }
    }

    return otherHelper.sendResponse(res, httpStatus.OK, { message: "success" });
  } catch (err) {
    next(err);
  }
};

userController.Check = async (req, res, next) => {
  try {
    const { wallet, account } = req.body;

    const walletInfo = await walletSchema.findOne({ wallet: wallet });
    const accountInfo = await walletSchema.findOne({ wallet: account });

    const userId = walletInfo.user;
    const accountId = accountInfo.user;

    const followerAvailable = await userSchema.find({
      _id: userId,
      followers: accountId,
    });

    const flag = followerAvailable.length ? 0 : 1;

    return otherHelper.sendResponse(res, httpStatus.OK, { flag: flag });
  } catch (err) {
    next(err);
  }
};

userController.Search = async (res, req, next) => {
  try {
    return otherHelper.sendResponse(res, httpStatus.OK, { message: "SUCCESS" });
  } catch (err) {
    next(err);
  }
};
module.exports = userController;
