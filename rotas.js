const app = require('./app.js')
const rotas = require('app.routes');

rotas.get('/', function (req, res) {
    res.send('Rotas funcionando')
  })