'use strict';

var Docente = require('../models/docenteModel.js');

exports.mostrarDocentes = function(req, res) {
  Docente.seleccionarTodos(function(err, docente) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', docente);
      res.send(docente);
  });
};

exports.nuevoDocente = function(req, res) {
  var nuevo_docente = new Docente(req.body);

  //handles null error
   if(!nuevo_docente.idDocente || !nuevo_docente.idMateria){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Docente.insertarDocente(nuevo_docente, function(err, docente) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El docente ya existe'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(docente);
    });
  }
};

exports.buscarDocente = function(req, res) {
  Docente.seleccionarDocente(req.params.idDocente, function(err, docente) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (docente.length < 1){
      return res.status(404).send({error:404, message: 'El docente no existe'});
    } else{
      return res.json(docente);
    }
  });
};

exports.buscarDocenteMateria = function(req, res) {
  Docente.seleccionarDocenteMateria(req.params.idMateria, function(err, docente) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (docente.length < 1){
      return res.status(404).send({error:404, message: 'El docente no existe'});
    } else{
      return res.json(docente);
    }
  });
};

exports.actualizarDocente = function(req, res) {
  Docente.actualizarDocente(req.params.idDocente, new Docente(req.body), function(err, docente) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (docente.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun docente'});
    } else{
      return res.send({message: 'Docente actualizado'});
    }
  });
};

exports.borrarDocente = function(req, res) {
  Docente.borrarDocente(req.params.idDocente, function(err, docente) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (docente.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun docente'});
    } else{
      return res.send({message: 'Docente eliminado'});
    }
  });
};
