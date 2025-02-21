const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../../../models/user");

const verifyUserToken = async (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res.status(400).send("No token was received");
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    const { _id: userId } = decoded;

    // Search on User model by id and return whether or not this user exists as an admin
    const user = await User.findById(userId);
    if (!user) {
      return res.send({ isAdmin: false });
    }

    return res.send({ isAdmin: true });
  } catch (e) {
    return res.status(400).send("Invalid token");
  }
}

module.exports = { verifyUserToken };
