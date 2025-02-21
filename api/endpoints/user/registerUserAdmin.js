const { User, handleUserValidation } = require("../../../models/user");
const bcrypt = require('bcrypt');
const _ = require("lodash");

const registerUserAdmin = async (req, res) => {
  const { error } = handleUserValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.send({ errors: errorMessages });
  }

  // Check if the user already exists
  let user = await User.findOne({ email: req.body.email });
  // if (user) return res.status(400).send("The user already exists");
  if (user) return res.send({ errors: ["Admin with this email already exists."] });

  // Create new admin user
  const salt = await bcrypt.genSalt(10);
  user = new User(_.pick(req.body, ['name', 'phone', 'email', 'password']));
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  const token = user.generateAuthToken();

  // Send the token in the response header
  res.header('x-auth-token', token).send('This admin account has been registered');
}

module.exports = { registerUserAdmin };
