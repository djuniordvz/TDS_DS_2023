const express = require("express");
//const bodyParser = require("body-parser");
const u = 'Junior'
const p = '159357'

const app = express();

app.use(express.json());

app.get('/teste', [] ,(req, resp) => {
    resp.send("<h1>Send me a pix, broh!</h1>");
});

app.post('/login', [] ,(req, resp) => {
    //const user = req.body.user;
    //const password = req.body.password;
    const {User, Password} = req.body;

    User == u && Password == p ? resp.send({message: "Sucessfully autentication"}) : resp.send({message: "Wrong credentials"});
});

app.listen(8080, () => {
    console.log("Server is working in port 8080");
});