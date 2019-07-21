'use strict';

var Materia = require('../models/materiaModel.js');

exports.mostrarMaterias = function(req, res) {
  Materia.seleccionarTodos(function(err, materia) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', materia);
      res.send(materia);
  });
};

exports.nuevaMateria = function(req, res) {
  var nueva_materia = new Materia(req.body);

  //handles null error
   if(!nueva_materia.nombreMateria || !nueva_materia.descripcion){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Materia.insertarMateria(nueva_materia, function(err, materia) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'La materia ya existe'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(materia);
    });
  }
};

exports.buscarMateria = function(req, res) {
  Materia.seleccionarMateria(req.params.idMateria, function(err, materia) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (materia.length < 1){
      return res.status(404).send({error:404, message: 'La materia no existe'});
    } else{
      return res.json(materia);
    }
  });
};

exports.actualizarMateria = function(req, res) {
  Materia.actualizarMateria(req.params.idMateria, new Materia(req.body), function(err, materia) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (materia.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ninguna materia'});
    } else{
      return res.send({message: 'Materia actualizada'});
    }
  });
};

exports.borrarMateria = function(req, res) {
  Materia.borrarMateria(req.params.idMateria, function(err, materia) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (materia.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ninguna materia'});
    } else{
      return res.send({message: '"Materia eliminada'});
    }
  });
};
