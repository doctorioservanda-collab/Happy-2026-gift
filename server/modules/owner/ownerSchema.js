const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ownerSchema = new schema(
  {
    nft: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
      ref: "wallets.wallet",
    },
    supply: {
      type: Number,
      required: true,
      default: 1,
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

ownerSchema.virtual("nftInfo", {
  ref: "nfts",
  localField: "nft",
  foreignField: "id",
  justOne: true,
});

ownerSchema.virtual("ownerInfo", {
  ref: "wallets",
  localField: "owner",
  foreignField: "wallet",
  justOne: true,
});

module.exports = Owner = mongoose.model("owners", ownerSchema);
