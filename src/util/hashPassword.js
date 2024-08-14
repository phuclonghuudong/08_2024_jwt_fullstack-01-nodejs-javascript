const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, saltRounds);
  return hashPass;
};

const comparePassword = async (txtPassword, password) => {
  const pass = await bcrypt.compare(txtPassword, password);
  return pass;
};

module.exports = {
  hashPassword,
  comparePassword,
};
