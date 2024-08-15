const { verify_token } = require("../util/jwtWeb");

const auth = (req, res, next) => {
  const white_lists = ["/", "/register", "/login"];

  if (white_lists.find((item) => "/v1/api" + item === req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization?.split(" ")?.[1]) {
      const token = req.headers.authorization.split(" ")[1];

      //verify token
      try {
        const decoded = verify_token(token);
        req.user = {
          email: decoded.email,
          name: decoded.name,
        };

        next();
      } catch (error) {
        return res.status(401).json({
          message: "Unauthorized!",
        });
      }
    } else {
      return res.status(401).json({
        message: "Unauthorized.",
      });
    }
  }
};

module.exports = auth;
