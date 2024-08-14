const User = require("../models/user");
const { hashPassword, comparePassword } = require("../util/hashPassword");
const { access_token } = require("../util/jwtWeb");

const createUserService = async (name, email, password) => {
  try {
    //check user exist
    const user = await User.findOne({ email });
    if (user) {
      return null;
    }
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
        const payload = {
          email: user.email,
          name: user.name,
        };

        const access = access_token(payload);
        return {
          EC: 0,
          access,
          user: {
            email: user.email,
            name: user.name,
          },
        };
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

const getUserService = async (txtEmail, password) => {
  try {
    const result = await User.find({}).select("-password");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
  loginUserService,
  getUserService,
};
