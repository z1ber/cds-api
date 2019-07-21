'use strict';

var Estudiante = require('../models/estudianteModel.js');

exports.mostrarEstudiantes = function(req, res) {
  Estudiante.seleccionarTodos(function(err, estudiante) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', estudiante);
      res.send(estudiante);
  });
};

exports.nuevoEstudiante = function(req, res) {
  var nuevo_estudiante = new Estudiante(req.body);

  //handles null error
   if(!nuevo_estudiante.idUsuario || !nuevo_estudiante.idGrupo){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Estudiante.insertarEstudiante(nuevo_estudiante, function(err, estudiante) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El estudiante ya existe'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(estudiante);
    });
  }
};

exports.buscarEstudiante = function(req, res) {
  Estudiante.seleccionarEstudiante(req.params.idEstudiante, function(err, estudiante) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (estudiante.length < 1){
      return res.status(404).send({error:404, message: 'El estudiante no existe'});
    } else{
      return res.json(estudiante);
    }
  });
};

exports.buscarEstudianteGrupo = function(req, res) {
  Estudiante.seleccionarEstudianteGrupo(req.params.grupo, function(err, estudiante) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (estudiante.length < 1){
      return res.status(404).send({error:404, message: 'No hay estudiantes en el grupo o el grupo no existe'});
    } else{
      return res.json(estudiante);
    }
  });
};

exports.actualizarEstudiante = function(req, res) {
  Estudiante.actualizarEstudiante(req.params.idEstudiante, new Estudiante(req.body), function(err, estudiante) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (estudiante.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun estudiante'});
    } else{
      return res.send({message: 'Estudiante actualizado'});
    }
  });
};

exports.borrarEstudiante = function(req, res) {
  Estudiante.borrarEstudiante(req.params.idEstudiante, function(err, estudiante) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (estudiante.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun estudiante'});
    } else{
      return res.send({message: 'Estudiante eliminado'});
    }
  });
};
