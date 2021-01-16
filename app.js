const express = require('express');

const app = express();

// ROTAS

app.get('/', function (req, res) {
    res.send('Rotas funcionando')
  })

app.post('/api', function (req, res) {
    res.send('data.json')
})

app.listen(3000)
console.log("server is running")