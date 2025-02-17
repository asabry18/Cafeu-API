const MenuItem = require("../../models/Menu");

const insertMenu = async (req, res) => {
  try {
    const menuItem = new MenuItem();

    menuItem.name = req.body.name;
    menuItem.price = req.body.price;
    menuItem.description = req.body.description;
    menuItem.category = req.body.category;
    menuItem.imageUrl = req.body.imageUrl;
    menuItem.save();

    res.send('Saved your menu item to the DB');
  } catch (e) {
    res.send('Something went wrong while inserting your new menu item');
  }
}

module.exports = { insertMenu };
