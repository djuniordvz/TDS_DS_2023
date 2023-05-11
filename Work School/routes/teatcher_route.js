const express = require("express");
const teatcherController = require("../controller/teatcher_controller");

const routes = express.Router();

routes.get("/getall", teatcherController.FunctionGetAll);
routes.get("/getbyID/:id([0-9]+)", teatcherController.FunctionGetByID);
routes.post("/post", teatcherController.FunctionPost);
routes.put("/put/:id([0-9]+)", teatcherController.FunctionPut);
routes.delete("/delete/:id([0-9]+)", teatcherController.FunctionDelete);

module.exports = routes;