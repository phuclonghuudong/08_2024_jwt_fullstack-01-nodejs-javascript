const express = require("express");
const { createUser, handLogin } = require("../controllers/userController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello API!");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handLogin);

module.exports = routerAPI; //export default
