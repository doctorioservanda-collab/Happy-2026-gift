const mongoose = require("mongoose");
const schema = mongoose.Schema;

const transactionSchema = new schema(
  {
    blockHash: {
      type: String,
    },
    blockNumber: {
      type: Number,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    nft: {
      type: String,
    },
    transactionHash: {
      type: String,
      required: true,
    },
    transactionIndex: {
      type: Number,
    },
    price: {
      type: String,
    },
    supply: {
      type: Number,
      required: true,
      default: 1,
    },
    cumulativeGasUsed: {
      type: String,
    },
    effectiveGasPrice: {
      type: String,
    },
    gasUsed: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Transaction = mongoose.model(
  "transactions",
  transactionSchema
);
