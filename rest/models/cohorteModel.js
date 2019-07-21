'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Cohorte = function(cohorte){
    this.idCohorte = Cohorte.idCohorte;
    this.nombreCohorte = Cohorte.nombreCohorte;
};

Cohorte.insertarGrupo = function createCohorte(newCohorte, result) {
        sql.query("INSERT INTO cohorte SET ?", newCohorte, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo cohorte ingresado");
                    result(null, newCohorte);
                }
            });
};

Cohorte.seleccionarCohorte = function createCohorte(cohorte, result) {
        sql.query("Select * from cohorte where idCohorte = ? ", cohorte, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Cohorte.seleccionarTodos = function getAllCohorte(result) {
        sql.query("Select * from cohorte", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('cohortes : ', res);
                    result(null, res);
                }
            });
};

Cohorte.actualizarCohorte = function(idCohorte, cohorte, result){
  sql.query("UPDATE cohorte SET nombreCohorte = ? WHERE idCohorte = ?",
  [cohorte.nombreCohorte, idCohorte], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Cohorte.borrarCohorte = function(cohorte, result){
     sql.query("DELETE FROM cohorte WHERE idCohort = ?", [cohorte], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Cohorte;
