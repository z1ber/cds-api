'user strict';
var sql = require('./conexionbd.js');

//Constructor del cliente
var Horario = function(horario){
    this.idHorario = Horario.idHorario;
    this.idEstudiante = Horario.idEstudiante;
    this.idClase = Horario.idClase;
    this.fechaInicio = Horario.fechaInicio;
};

Horario.insertarHorario = function createHorario(newHorario, result) {
        sql.query("INSERT INTO horario SET ?", newHorario, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Nuevo horario ingresado");
                    result(null, newHoraio);
                }
            });
};

Horario.seleccionarHorario = function createHorario(horario, result) {
        sql.query("Select * from horario where idHorario = ? ", horario, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Horario.seleccionarDia = function createHorario(dia, grupo, result) {
        sql.query("SELECT clase.horaInicio, clase.horaFin, materia.nombreMateria, CONCAT_WS(' ',usuario.nombreUsuario, usuario.apellidoUsuario) AS docente FROM horario LEFT JOIN clase ON horario.idClase = clase.idClase LEFT JOIN materia ON clase.idMateria = materia.idMateria LEFT JOIN docente ON docente.idMateria = materia.idMateria LEFT JOIN usuario ON usuario.nombreLogin = docente.idUsuario LEFT JOIN estudiante ON horario.idEstudiante = estudiante.idEstudiante WHERE clase.dia = ? AND estudiante.idGrupo = ? GROUP BY clase.horaInicio ",[dia , grupo], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Horario.seleccionarTodos = function getAllHorario(result) {
        sql.query("Select * from horario", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log('horarios : ', res);
                    result(null, res);
                }
            });
};

Horario.actualizarHorario = function(idHorario, horario, result){
  sql.query("UPDATE horario SET idEstudiante = ?, idClase = ?, fechaInicio = ? WHERE idHorario = ?",
  [horario.idEstudiante, horario.idClase, horario.fechaInicio, idDocente], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(err, null);
             }
           else{
                result(null, res);
             }
            });
};

Horario.borrarHorario = function(horario, result){
     sql.query("DELETE FROM horario WHERE idHorario = ?", [horario], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

module.exports = Horario;
