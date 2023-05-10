const express = require("express");

const workerController = require("../controller/worker_controller");

const routes = express.Router();

routes.get("/getall", workerController.FunctionGetAll);

routes.get("/getbyID/:id([0-9]+)", workerController.FunctionGetByID);

routes.post("/post", workerController.FunctionPost);

routes.put("/put/:id([0-9]+)", workerController.FunctionPut);

routes.delete("/delete/:id([0-9]+)", workerController.FunctionDelete);

routes.get("/dependents", workerController.FunctionFindDependents);

routes.get("/dependents/:id([0-9]+)", workerController.FunctionFindDependentsFunc);

module.exports = routes;