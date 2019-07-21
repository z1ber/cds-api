'use strict';

var Clase = require('../models/docenteModel.js');

exports.mostrarClases = function(req, res) {
  Clase.seleccionarTodos(function(err, clase) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', clase);
      res.send(clase);
  });
};

exports.nuevaClase = function(req, res) {
  var nueva_clase = new Clase(req.body);

  //handles null error
   if(!nueva_clase.idMateria || !nueva_clase.idDocente || !nueva_clase.horaInicio || !nueva_clase.horaFin || !nueva_clase.dia){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Docente.insertarDocente(nueva_clase, function(err, clase) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'La clase ya existe'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(clase);
    });
  }
};

exports.buscarClase = function(req, res) {
  Clase.seleccionarClase(req.params.idClase, function(err, clase) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (clase.length < 1){
      return res.status(404).send({error:404, message: 'La clase no existe'});
    } else{
      return res.json(clase);
    }
  });
};

exports.actualizarClase = function(req, res) {
  Clase.actualizarClase(req.params.idClase, new Clase(req.body), function(err, clase) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (clase.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ninguna clase'});
    } else{
      return res.send({message: 'Clase actualizada'});
    }
  });
};

exports.borrarClase = function(req, res) {
  Clase.borrarClase(req.params.idClase, function(err, clase) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (clase.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ninguna clase'});
    } else{
      return res.send({message: 'Clase eliminada'});
    }
  });
};
