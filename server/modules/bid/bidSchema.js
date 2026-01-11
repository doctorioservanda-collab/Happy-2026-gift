const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bidSchema = new schema(
  {
    auction: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "auctions",
    },
    bidder: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
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

bidSchema.virtual("bidderInfo", {
  ref: "wallets",
  localField: "bidder",
  foreignField: "wallet",
  justOne: true,
});

module.exports = Bid = mongoose.model("bids", bidSchema);
