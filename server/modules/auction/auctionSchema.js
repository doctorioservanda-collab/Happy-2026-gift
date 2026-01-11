const mongoose = require("mongoose");
const schema = mongoose.Schema;

const auctionSchema = new schema(
  {
    market: {
      type: String,
      required: true,
    },
    nft: {
      type: String,
      required: true,
    },
    buyer: {
      type: String,
    },
    seller: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    period: {
      type: Number,
      required: true,
    },
    supply: {
      type: Number,
      required: true,
      default: 1,
    },
    state: {
      type: String,
      required: true,
      default: "0",
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

auctionSchema.virtual("sellerInfo", {
  ref: "wallets",
  localField: "seller",
  foreignField: "wallet",
  justOne: true,
});

auctionSchema.virtual("nftInfo", {
  ref: "nfts",
  localField: "nft",
  foreignField: "id",
  justOne: true,
});
module.exports = mongoose.model("auctions", auctionSchema);
