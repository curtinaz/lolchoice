const express = require('express');

const app = express();
const routes = express.Router();

// ROTAS

app.get('/', function (req, res) {
    res.send('Rotas funcionando')
  })

app.listen(3000)
console.log("server is running")

module.exports = routes;