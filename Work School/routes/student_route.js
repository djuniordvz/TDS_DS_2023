const express = require("express");
const studentController = require("../controller/student_controller");

const routes = express.Router();

routes.get("/getall", studentController.FunctionGetAll);
routes.get("/getbyID/:id([0-9]+)", studentController.FunctionGetByID);
routes.post("/post", studentController.FunctionPost);
routes.put("/put/:id([0-9]+)", studentController.FunctionPut);
routes.delete("/delete/:id([0-9]+)", studentController.FunctionDelete);

module.exports = routes;