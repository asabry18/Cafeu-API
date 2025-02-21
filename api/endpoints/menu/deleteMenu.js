const MenuItem = require("../../../models/Menu");

const deleteMenu = async (req, res) => {
  try {
    // receive id of item to be deleted
    const menuItemId = req.body.id;

    // delete menu item
    const deleteMenuItem = await MenuItem.findByIdAndDelete(menuItemId);
    res.send('This menu item has been successfully deleted');
  } catch (e) {
    res.send('Something went wrong while deleting this menu item');
  }
}

module.exports = { deleteMenu };
