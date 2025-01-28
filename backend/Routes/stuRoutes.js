const express = require("express")
const route = express.Router()
const controller = require("../Controller/stuController")
route.post("/savedata", controller.saveData)
route.get("/display", controller.dataDisplay)
route.post("/search", controller.dataSearch)
module.exports = route