'use strict';

var Rol = require('../models/rolModel.js');

exports.mostrarRoles = function(req, res) {
  Rol.seleccionarTodos(function(err, rol) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', rol);
      res.send(rol);
  });
};

exports.nuevoRol = function(req, res) {
  var nuevo_rol = new Rol(req.body);

  //handles null error
   if(!nuevo_rol.nombreRol){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Rol.insertarRol(nuevo_rol, function(err, rol) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El rol ya se ha utilizado'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(rol);
    });
  }
};

exports.buscarRol = function(req, res) {
  Rol.seleccionarRol(req.params.idRol, function(err, rol) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (rol.length < 1){
      return res.status(404).send({error:404, message: 'El rol no existe'});
    } else{
      return res.json(rol);
    }
  });
};

exports.actualizarRol = function(req, res) {
  Rol.actualizarRol(req.params.idRol, new Rol(req.body), function(err, rol) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (rol.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun rol'});
    } else{
      return res.send({message: 'Rol actualizado'});
    }
  });
};

exports.borrarRol = function(req, res) {
  Rol.borrarRol(req.params.idRol, function(err, rol) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (rol.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun usuario'});
    } else{
      return res.send({message: 'Usuario eliminado'});
    }
  });
};
