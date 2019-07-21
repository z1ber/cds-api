'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Estudiante = function(estudiante){
    this.idEstudiante = Estudiante.idEstudiante;
    this.idUsuario = Estudiante.idUsuario;
    this.idGrupo = Estudiante.idGrupo;
};

Estudiante.insertarEstudiante = function createEstudiante(newEstudiante, result) {
        sql.query("INSERT INTO estudiante SET ?", newEstudiante, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo estudiante ingresado");
                    result(null, newEstudiante);
                }
            });
};

Estudiante.seleccionarEstudiante = function createEstudiante(estudiante, result) {
        sql.query("Select * from estudiante where idEstudiante = ? ", estudiante, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Estudiante.seleccionarEstudianteGrupo = function createEstudiante(grupo, result) {
        sql.query("SELECT estudiante.idEstudiante, CONCAT_WS(' ', usuario.nombreUsuario, usuario.apellidoUsuario) as alumno,	usuario.nombreLogin, usuario.idRol, estudiante.idGrupo FROM estudiante	INNER JOIN usuario ON estudiante.idUsuario = usuario.nombreLogin WHERE estudiante.idGrupo = ?", grupo, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Estudiante.seleccionarTodos = function getAllEstudiantes(result) {
        sql.query("SELECT estudiante.idEstudiante, CONCAT_WS(' ', usuario.nombreUsuario, usuario.apellidoUsuario) as alumno,	usuario.nombreLogin, usuario.idRol, estudiante.idGrupo FROM estudiante	INNER JOIN usuario ON estudiante.idUsuario = usuario.nombreLogin", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('estudiantes : ', res);
                    result(null, res);
                }
            });
};

Estudiante.actualizarEstudiante = function(idEstudiante, estudiante, result){
  sql.query("UPDATE estudiante SET idUsuario = ?, idGrupo = ? WHERE idEstudiante = ?",
  [estudiante.idUsuario, estudiante.idGrupo, idDocente], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Estudiante.borrarEstudiante = function(estudiante, result){
     sql.query("DELETE FROM estudiante WHERE idEstudiante = ?", [estudiante], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Estudiante;
