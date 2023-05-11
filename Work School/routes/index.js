const express = require("express");
const teatcherRoutes = require("./teatcher_route");
const studentRoutes = require("./student_route");
const classRoutes = require("./class_route");

const routes = new express.Router();

routes.use("/teatcher", teatcherRoutes);
routes.use("/student", studentRoutes);
routes.use("/class", classRoutes);

module.exports = routes;