'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Clase = function(clase){
    this.idClase = Clase.idClase;
    this.idMateria = Clase.idMateria;
    this.idDocente = Clase.idDocente;
    this.horaInicio = Clase.horaInicio;
    this.horaFin = Clase.horaFin;
    this.dia = Clase.dia;
};

Clase.insertarClase = function createClase(newClase, result) {
        sql.query("INSERT INTO clase SET ?", newClase, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nueva clase ingresado");
                    result(null, newClase);
                }
            });
};

Clase.seleccionarClase = function createClase(clase, result) {
        sql.query("Select * from clase where idClase = ? ", clase, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Clase.seleccionarTodos = function getAllClases(result) {
        sql.query("Select * from clases", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('clases : ', res);
                    result(null, res);
                }
            });
};

Clase.actualizarClase = function(idClase, clase, result){
  sql.query("UPDATE clase SET idMateria = ?, idDocente = ?, horaInicio = ?, horaFin = ?, dia = ? WHERE idClase = ?",
  [clase.idMateria, clase.iDocente, clase.horaInicio, clase.horaFin, clase.dia, idDocente], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Clase.borrarClase = function(clase, result){
     sql.query("DELETE FROM clase WHERE idClase = ?", [clase], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Clase;
