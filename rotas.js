const rotas = require('./app.js', 'routes');

rotas.get('/', function (req, res) {
    res.send('Hello World')
  })