const mongoose = require("mongoose");
const schema = mongoose.Schema;

const historySchema = new schema(
  {
    market: {
      type: String,
    },
    nft: {
      type: String,
    },
    type: {
      type: String,
      enum: ["List", "Purchase", "Bid", "Following"],
      required: true,
    },
    auction: {
      type: mongoose.Types.ObjectId,
      ref: "auctions",
    },
    buy: {
      type: mongoose.Types.ObjectId,
      ref: "buys",
    },
    price: {
      type: "String",
    },
    supply: {
      type: Number,
    },
    creator: {
      type: String,
      required: true,
    },
    following: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

historySchema.virtual("creatorInfo", {
  ref: "wallets",
  localField: "creator",
  foreignField: "wallet",
  justOne: true,
});

historySchema.virtual("nftInfo", {
  ref: "nfts",
  localField: "nft",
  foreignField: "id",
  justOne: true,
});

module.exports = Buy = mongoose.model("histories", historySchema);
