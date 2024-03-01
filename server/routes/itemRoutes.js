const express = require("express");
const route = express.Router();
const { items, price } = require("../controller/itemController");
route.get("/items", items);
route.get("/price", price);
module.exports = route;