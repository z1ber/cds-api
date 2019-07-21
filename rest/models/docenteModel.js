'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Docente = function(docente){
    this.idDocente = Docente.idDocente;
    this.idUsuario = Docente.idUsuario;
    this.idMateria = Docente.idMateria;
};

Docente.insertarDocente = function createDocente(newDocente, result) {
        sql.query("INSERT INTO docente SET ?", newDocente, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo docente ingresado");
                    result(null, newDocente);
                }
            });
};

Docente.seleccionarDocente = function createDocente(docente, result) {
        sql.query("Select * from docente where idDocente = ? ", docente, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Docente.seleccionarTodos = function getAllDocentes(result) {
        sql.query("SELECT docente.idDocente, CONCAT_WS(' ', usuario.nombreUsuario, usuario.apellidoUsuario) as docente, materia.nombreMateria, usuario.nombreLogin, usuario.idRol FROM docente INNER JOIN usuario ON docente.idUsuario = usuario.nombreLogin INNER JOIN materia ON docente.idMateria = materia.idMateria", function (err, res) {

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

Docente.seleccionarDocenteMateria = function getAllDocentes(materia, result) {
        sql.query("SELECT docente.idDocente, CONCAT_WS(' ', usuario.nombreUsuario, usuario.apellidoUsuario) as docente, materia.nombreMateria, usuario.nombreLogin, usuario.idRol FROM docente INNER JOIN usuario ON docente.idUsuario = usuario.nombreLogin INNER JOIN materia ON docente.idMateria = materia.idMateria WHERE materia.idMateria = ?", materia, function (err, res) {

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

Docente.actualizarDocente = function(idDocente, docente, result){
  sql.query("UPDATE docente SET idUsuario = ?, idMateria = ? WHERE idDocente = ?",
  [docente.idUsuario, docente.idMateria, idDocente], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Docente.borrarDocente = function(docente, result){
     sql.query("DELETE FROM docente WHERE idDocente = ?", [docente], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Docente;
