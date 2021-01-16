const express = require('express');

const app = express();

// ROTAS

app.get('/', function (req, res) {
    res.send('Rotas funcionando')
  })

app.listen(3000)
console.log("server is running")