'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Grupo = function(grupo){
    this.idGrupo = Grupo.idGrupo;
    this.nombreGrupo = Grupo.nombreGrupo;
    this.idCohorte = Grupo.idCohorte;
};

Grupo.insertarGrupo = function createGrupo(newGrupo, result) {
        sql.query("INSERT INTO grupo SET ?", newGrupo, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo usuario ingresado");
                    result(null, newGrupo);
                }
            });
};

Grupo.seleccionarGrupo = function createGrupo(grupo, result) {
        sql.query("Select * from grupo where idGrupo = ? ", grupo, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Grupo.seleccionarTodos = function getAllGrupo(result) {
        sql.query("Select * from grupo", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('grupos : ', res);
                    result(null, res);
                }
            });
};

Grupo.actualizarGrupo = function(idGrupo, grupo, result){
  sql.query("UPDATE grupo SET nombreGrupo = ?, idCohorte = ? WHERE idGrupo = ?",
  [grupo.nombreGrupo, grupo.idCohorte, idGrupo], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Grupo.borrarGrupo = function(grupo, result){
     sql.query("DELETE FROM grupo WHERE idGrupo = ?", [grupo], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Grupo;
