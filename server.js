//Requerimiento y declaracion de variables
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 4000;

// Configuracion de la conexion a la bd
var sql = require('./rest/models/conexionbd.js');

// Conexion e inicio del servidor
app.get('/', (req,res) => {
  res.send("Hola mundo CDS v1")
})

app.listen(port);

console.log('Server CDS iniciado en puerto: ' + port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Importando y registrando las rutas
var routes = require('./rest/routes/apiRoutes');
routes(app);
