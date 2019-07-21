'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Rol = function(Rol){
    this.idRol = Rol.idRol;
    this.nombreRol = Rol.nombreRol;
};

Rol.insertarRol= function createRol(newRol, result) {
        sql.query("INSERT INTO rol SET ?", newRol, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo usuario ingresado");
                    result(null, newRol);
                }
            });
};

Rol.seleccionarRol = function createRol(rol, result) {
        sql.query("Select * from rol where idRol = ? ", rol, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Rol.seleccionarTodos = function getAllRol(result) {
        sql.query("Select * from rol", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('roles : ', res);
                    result(null, res);
                }
            });
};

Rol.actualizarRol = function(idRol, rol, result){
  sql.query("UPDATE rol SET nombreRol = ? WHERE idRol = ?",
  [rol.nombreRol, idRol], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Rol.borrarRol = function(rol, result){
     sql.query("DELETE FROM rol WHERE idRol = ?", [rol], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Rol;
