const mongoose = require("mongoose");
const schema = mongoose.Schema;

const nftSchema = new schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    contract: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    metadata: {
      type: String,
      required: true,
    },
    supply: {
      type: Number,
      required: true,
      default: 1,
    },
    creator: {
      type: String,
      required: true,
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

nftSchema.virtual("creatorInfo", {
  ref: "wallets",
  localField: "creator",
  foreignField: "wallet",
  justOne: true,
});

nftSchema.virtual("owners", {
  ref: "owners",
  localField: "id",
  foreignField: "nft",
});

nftSchema.index({ "$**": "text" });

module.exports = Nft = mongoose.model("nfts", nftSchema);
