const MenuItem = require("../../models/Menu");

const getMenu = async (req, res) => {
  try {
    // return all menu items
    const items = await MenuItem.find();
    res.json(items);
  } catch (e) {
    res.send("something went wrong while retrieving menu items");
  }
};

module.exports = { getMenu };
