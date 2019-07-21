'use strict';

var Grupo = require('../models/grupoModel.js');

exports.mostrarGrupos = function(req, res) {
  Grupo.seleccionarTodos(function(err, grupo) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', grupo);
      res.send(grupo);
  });
};

exports.nuevoGrupo = function(req, res) {
  var nuevo_grupo = new Grupo(req.body);

  //handles null error
   if(!nuevo_grupo.nombreGrupo || !nuevo_grupo.idCohorte){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Grupo.insertarGrupo(nuevo_grupo, function(err, grupo) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El grupo ya se ha utilizado'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(grupo);
    });
  }
};

exports.buscarGrupo = function(req, res) {
  Grupo.seleccionarGrupo(req.params.idGrupo, function(err, grupo) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (grupo.length < 1){
      return res.status(404).send({error:404, message: 'El grupo no existe'});
    } else{
      return res.json(grupo);
    }
  });
};

exports.actualizarGrupo = function(req, res) {
  Grupo.actualizarGrupo(req.params.idGrupo, new Grupo(req.body), function(err, grupo) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (grupo.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun grupo'});
    } else{
      return res.send({message: 'Grupo actualizado'});
    }
  });
};

exports.borrarGrupo = function(req, res) {
  Grupo.borrarGrupo(req.params.idGrupo, function(err, grupo) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (grupo.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun grupo'});
    } else{
      return res.send({message: 'Grupo eliminado'});
    }
  });
};
