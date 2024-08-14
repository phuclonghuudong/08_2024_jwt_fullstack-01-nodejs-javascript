const express = require("express");
const { createUser, handLogin, getUser } = require("../controllers/userController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello API!");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handLogin);

routerAPI.get("/user", getUser);

module.exports = routerAPI; //export default
