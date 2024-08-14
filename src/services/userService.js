const User = require("../models/user");
const { hashPassword, comparePassword } = require("../util/hashPassword");

const createUserService = async (name, email, password) => {
  try {
    const hassPass = await hashPassword(password);
    let result = await User.create({
      name: name,
      email: email,
      password: hassPass,
      role: "VIP",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const loginUserService = async (txtEmail, password) => {
  try {
    const user = await User.findOne({ email: txtEmail });

    if (user) {
      const isMatchPassword = await comparePassword(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "Email/Password không hợp lệ!",
        };
      } else {
        return "create an access token";
      }
    } else {
      return {
        EC: 1,
        EM: "Email/Password không hợp lệ!",
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginUserService,
};
