'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Materia = function(materia){
    this.idMateria = Materia.idMateria;
    this.nombreMateria = Materia.nombreMateria;
    this.descripcion = Materia.descripcion;
};

Materia.insertarMateria = function createMateria(newMateria, result) {
        sql.query("INSERT INTO materia SET ?", newMateria, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nueva materia ingresada");
                    result(null, newMateria);
                }
            });
};

Materia.seleccionarMateria = function createMateria(materia, result) {
        sql.query("Select * from materia where idMateria = ? ", materia, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Materia.seleccionarTodos = function getAllMaterias(result) {
        sql.query("Select * from materia", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('docentes : ', res);
                    result(null, res);
                }
            });
};

Materia.actualizarMateria = function(idMateria, materia, result){
  sql.query("UPDATE materia SET nombreMateria = ?, descripcion = ? WHERE idMateria = ?",
  [materia.nombreMateria, materia.descripcion, idMateria], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Materia.borrarMateria = function(materia, result){
     sql.query("DELETE FROM materia WHERE idMateria = ?", [materia], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Materia;
