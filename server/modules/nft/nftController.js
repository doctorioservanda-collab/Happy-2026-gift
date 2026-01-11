const httpStatus = require("http-status");
const otherHelper = require("../../helper/others.helper");
const nftSchema = require("./nftSchema");
const ownerSchema = require("../owner/ownerSchema");

const nftController = {};

nftController.GetTotalMintCount = async (req, res, next) => {
  try {
    const mintCount = await nftSchema.find().count();
    return otherHelper.sendResponse(res, httpStatus.OK, { total: mintCount });
  } catch (err) {
    next(err);
  }
};

nftController.Create = async (req, res, next) => {
  try {
    const data = new nftSchema({
      id: req.body.id,
      name: req.body.name,
      contract: req.body.contract,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      metadata: req.body.metadata,
      supply: req.body.supply,
      creator: req.body.creator,
    });

    await data.save();

    /** Save owner data */
    await new ownerSchema({
      nft: req.body.id,
      owner: req.body.creator,
      supply: req.body.supply,
    }).save();

    return otherHelper.sendResponse(res, httpStatus.OK, { nft: data });
  } catch (err) {
    next(err);
  }
};

nftController.Created = async (req, res, next) => {
  try {
    const { wallet } = req.body;
    const res = nftSchema.find({ creator: wallet });
    return otherHelper.sendResponse(res, httpStatus.OK, { nfts: [] });
  } catch (err) {
    next(err);
  }
};

module.exports = nftController;
