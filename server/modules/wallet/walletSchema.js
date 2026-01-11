const mongoose = require("mongoose");
const userSchema = require("../user/userSchema");
const schema = mongoose.Schema;

const walletSchema = new schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    wallet: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Wallet = mongoose.model("wallets", walletSchema);
