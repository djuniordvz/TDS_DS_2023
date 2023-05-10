const express = require("express");

const workersRoutes = require("./worker_route");

const routes = new express.Router();

routes.use("/workers", workersRoutes);

module.exports = routes;