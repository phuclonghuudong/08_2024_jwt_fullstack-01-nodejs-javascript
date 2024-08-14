require("dotenv").config();
const jwt = require("jsonwebtoken");

const access_token = (payload) => {
  const access = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
  return access;
};

module.exports = {
  access_token,
};
