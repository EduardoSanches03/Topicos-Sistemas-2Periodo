const express = require("express");
const app = express();
const rotas = require("./rotas");

require = require("./config/dbConfig");
app.use(express.json());
app.use(rotas);

app.listen(666);