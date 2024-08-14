const express = require("express");
const { createUser, handLogin, getUser } = require("../controllers/userController");
// const delay = require("../middleware/delay");
const auth = require("../middleware/auth");

const routerAPI = express.Router();

routerAPI.all("*", auth);

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello API!");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handLogin);

routerAPI.get("/user", getUser);

module.exports = routerAPI; //export default
