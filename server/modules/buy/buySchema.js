const mongoose = require("mongoose");
const schema = mongoose.Schema;

const buySchema = new schema(
  {
    market: {
      type: String,
      required: true,
    },
    nft: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    buyer: {
      type: String,
    },
    price: {
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

buySchema.virtual("sellerInfo", {
  ref: "wallets",
  localField: "seller",
  foreignField: "wallet",
  justOne: true,
});

buySchema.virtual("nftInfo", {
  ref: "nfts",
  localField: "nft",
  foreignField: "id",
  justOne: true,
});

module.exports = Buy = mongoose.model("buys", buySchema);
