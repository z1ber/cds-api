'use strict';

var Horario = require('../models/horarioModel.js');

exports.mostrarHorarios = function(req, res) {
  Horario.seleccionarTodos(function(err, horario) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', horario);
      res.send(horario);
  });
};

exports.nuevoHorario = function(req, res) {
  var nuevo_horario = new Horario(req.body);

  //handles null error
   if(!nuevo_horario.idEstudiante || !nuevo_horario.idClase || nuevo_horario.fechaInicio){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Horario.insertarHorario(nuevo_horario, function(err, horario) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El horario ya existe'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(horario);
    });
  }
};

exports.HorarioGrupoDia = function(req, res) {
  Horario.seleccionarDia(req.params.dia, req.params.grupo, function(err, horario) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (horario.length < 1){
      return res.status(404).send({error:404, message: 'Los datos ingresados son incorrectos'});
    } else{
      return res.json(horario);
    }
  });
};

exports.buscarHorario = function(req, res) {
  Horario.seleccionarHorario(req.params.idHorario, function(err, horario) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (horario.length < 1){
      return res.status(404).send({error:404, message: 'El horario no existe'});
    } else{
      return res.json(horario);
    }
  });
};

exports.actualizarHorario = function(req, res) {
  Horario.actualizarHorario(req.params.idHorario, new Horario(req.body), function(err, horario) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (horario.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun horario'});
    } else{
      return res.send({message: 'Horario actualizado'});
    }
  });
};

exports.borrarHorario = function(req, res) {
  Horario.borrarHorario(req.params.idHorario, function(err, horario) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (horario.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun horario'});
    } else{
      return res.send({message: 'Horario eliminado'});
    }
  });
};
