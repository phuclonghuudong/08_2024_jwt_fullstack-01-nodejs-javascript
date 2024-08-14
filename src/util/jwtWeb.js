require("dotenv").config();
const jwt = require("jsonwebtoken");

const access_token = (payload) => {
  const access = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
  return access;
};

const verify_token = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = {
  access_token,
  verify_token,
};
