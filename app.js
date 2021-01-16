const express = require('express');

const app = express();
const routes = express.Router();

app.listen(3000)
console.log("server is running")

module.exports = routes;