'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Usuario = function(Usuario){
    this.idUsuario = Usuario.idUsuario;
    this.nombreLogin = Usuario.nombreLogin;
    this.password = Usuario.password;
    this.nombreUsuario = Usuario.nombreUsuario;
    this.apellidoUsuario = Usuario.apellidoUsuario;
    this.dui = Usuario.dui;
    this.direccion = Usuario.direccion;
    this.telefono = Usuario.telefono;
    this.idRol = Usuario.idRol;
};

Usuario.insertarUsuario= function createUser(newUsuario, result) {
        sql.query("INSERT INTO usuario SET ?", newUsuario, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    sql.query("SELECT * FROM usuario WHERE idUsuario = ?", res.insertId, function(error,response){
                        if(err){
                            console.log("error: ",error);
                            result(error,null);
                        }else{
                            result(null, response);
                        }       
                    })
                    
                }
            });
};

Usuario.seleccionarUsuario = function createUser(username, result) {
        sql.query("Select * from usuario where idUsuario = ? ", username, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Usuario.comprobarUsuario = function createUser(usuario, result) {
        sql.query("Select * from usuario where nombreLogin = ? AND password = ?", [usuario.nombreLogin, usuario.password], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Usuario.seleccionarTodos = function getAllUser(result) {
        sql.query("Select * from usuario", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('usuarios : ', res);
                    result(null, res);
                }
            });
};

Usuario.actualizarUsuario = function(idUsuario, usuario, result){
  sql.query("UPDATE usuario SET nombreUsuario = ?, apellidoUsuario = ?, dui = ?, direccion = ?, telefono = ?, idRol = ? WHERE idUsuario = ?",
  [usuario.nombreUsuario, usuario.apellidoUsuario, usuario.dui, usuario.direccion, usuario.telefono, usuario.idRol, idUsuario], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Usuario.actualizarContrasena = function(idUsuario, usuario, result){
  sql.query("UPDATE usuario SET password = ? WHERE idUsuario = ?",
  [usuario.password, idUsuario], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Usuario.borrarUsuario = function(usuario, result){
     sql.query("DELETE FROM usuario WHERE idUsuario = ?", [usuario], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Usuario;
