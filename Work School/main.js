const express = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, (error) => {
    (error) ? console.log(error) : console.log("Server is working on 8080 port")
});