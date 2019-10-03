'use strict';

var Usuario = require('../models/userModel.js');

exports.mostrarUsuarios = function(req, res) {
  Usuario.seleccionarTodos(function(err, user) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
      res.send(user);
  });
};

exports.usuariosRol = function(req, res) {
  Usuario.seleccionarTodosRol(req.params.idRol, function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.length < 1){
      return res.status(404).send({error:404, message: 'No hay usuarios con este rol'});
    } else{
      return res.json(user);
    }
  });
};

exports.nuevoUsuario = function(req, res) {
  var nuevo_usuario = new Usuario(req.body);

  //handles null error
   if(!nuevo_usuario.nombreLogin || !nuevo_usuario.password || !nuevo_usuario.nombreUsuario || !nuevo_usuario.apellidoUsuario
     || !nuevo_usuario.dui  || !nuevo_usuario.direccion || !nuevo_usuario.telefono || !nuevo_usuario.idRol){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Usuario.insertarUsuario(nuevo_usuario, function(err, user) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El nombre de usuario ya se ha utilizado'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(user);
    });
  }
};

exports.buscarUsuario = function(req, res) {
  Usuario.seleccionarUsuario(req.params.idUsuario, function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.length < 1){
      return res.status(404).send({error:404, message: 'El usuario no existe'});
    } else{
      return res.json(user);
    }
  });
};

exports.loginUsuario = function(req, res) {
  Usuario.comprobarUsuario(new Usuario(req.body), function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.length < 1){
      return res.status(404).send({error:404, message: 'Los datos ingresados son incorrectos'});
    } else{
      return res.json(user);
    }
  });
};

exports.actualizarUsuario = function(req, res) {
  Usuario.actualizarUsuario(req.params.idUsuario, new Usuario(req.body), function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun usuario'});
    } else{
      return res.send({message: 'Usuario actualizado'});
    }
  });
};

exports.actualizarContrasena = function(req, res) {
  Usuario.actualizarContrasena(req.params.idUsuario, new Usuario(req.body), function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun usuario'});
    } else{
      return res.send({message: 'Usuario actualizado'});
    }
  });
};

exports.borrarUsuario = function(req, res) {
  Usuario.borrarUsuario(req.params.idUsuario, function(err, user) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (user.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun usuario'});
    } else{
      return res.send({message: 'Usuario eliminado'});
    }
  });
};
