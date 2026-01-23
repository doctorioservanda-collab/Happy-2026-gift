const settingSch = require("../modules/setting/settingSchema");

module.exports.getSetting = async (type, sub_type, key) => {
  try {
    const temp =
      "global_" + type.trim() + "_" + sub_type.trim() + "_" + key.trim();
    if (temp) {
      let value = process.env[temp];
      if (value == undefined) {
        return null;
      }
      value = JSON.parse(value);
      return value;
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.setSetting = (type, sub_type, key, value) => {
  try {
    const temp =
      "global_" + type.trim() + "_" + sub_type.trim() + "_" + key.trim();
    process.env[temp] = JSON.stringify(value);
    return null;
  } catch (err) {
    console.log(err);
  }
};
module.exports.initSettings = async () => {
  return;
};
