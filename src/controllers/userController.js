const { createUserService, loginUserService } = require("../services/userService");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const data = await createUserService(name, email, password);
  return res.status(200).json(data);
};
const handLogin = async (req, res) => {
  const { email, password } = req.body;

  const data = await loginUserService(email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  handLogin,
};
