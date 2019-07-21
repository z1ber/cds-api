'use strict';

var Cohorte = require('../models/cohorteModel.js');

exports.mostrarCohortes = function(req, res) {
  Cohorte.seleccionarTodos(function(err, cohorte) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', cohorte);
      res.send(coohorte);
  });
};

exports.nuevoCohorte = function(req, res) {
  var nuevo_cohorte = new Cohorte(req.body);

  //handles null error
   if(!nuevo_cohorte.nombreCohorte){

            res.status(400).send({ error:true, message: 'Faltan datos que ingresar' });

        }
else{

  Cohorte.insertarCohorte(nuevo_cohorte, function(err, cohorte) {
    if (err){
      if (err.errno == 1062) {
          return res.status(400).send({error:400, message: 'El cohorte ya se ha utilizado'});
        } else {
          return res.status(400).send({error:400, message: err.code});
        }
      }
    return res.json(cohorte);
    });
  }
};

exports.buscarCohorte = function(req, res) {
  Cohorte.seleccionarCohorte(req.params.idCohorte, function(err, cohorte) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (cohorte.length < 1){
      return res.status(404).send({error:404, message: 'El cohorte no existe'});
    } else{
      return res.json(cohorte);
    }
  });
};

exports.actualizarCohorte = function(req, res) {
  Cohorte.actualizarCohorte(req.params.idCohorte, new Cohorte(req.body), function(err, cohorte) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (cohorte.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se actualizo ningun cohorte'});
    } else{
      return res.send({message: 'Cohorte actualizado'});
    }
  });
};

exports.borrarCohorte = function(req, res) {
  Cohorte.borrarCohorte(req.params.idCohorte, function(err, cohorte) {
    if (err){
      return res.status(400).send({error:400, message: err.code});
    }
    if (cohorte.affectedRows < 1){
      return res.status(400).send({error:400, message: 'No se borro ningun cohorte'});
    } else{
      return res.send({message: 'Cohorte eliminado'});
    }
  });
};
