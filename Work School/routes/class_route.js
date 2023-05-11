const express = require("express");
const classController = require("../controller/class_controller");

const routes = express.Router();

routes.get("/getall", classController.FunctionGetAll);
routes.get("/getbyID/:id([0-9]+)", classController.FunctionGetByID);
routes.post("/post", classController.FunctionPost);
routes.put("/put/:id([0-9]+)", classController.FunctionPut);
routes.delete("/delete/:id([0-9]+)", classController.FunctionDelete);
routes.get("/allclass", classController.FunctionGetAllClass);
routes.get("/joinbyID/:id([0-9]+)", classController.FunctionJoinByID);

module.exports = routes;