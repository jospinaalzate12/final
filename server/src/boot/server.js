const express = require("express");
const cors = require('cors')
const app = express();

const webRouter = require("../routers/web");
const apiRouter = require("../routers/api");

app.use(cors())
app.use(express.json()); // -> req.body -> POST
app.use(express.urlencoded({extended:true}));  // -> req.query -> GET
app.set('view engine', 'ejs');

app.use("/api/v1",apiRouter);
app.use("/",webRouter);
app.use("/users", express.static(__dirname + "/storage"));

module.exports = app;
