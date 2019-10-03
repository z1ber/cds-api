'use strict';
module.exports = function(app) {
  var clase = require('../controllers/claseController.js');
  var cohorte = require('../controllers/cohorteController.js');
  var docente = require('../controllers/docenteController.js');
  var estudiante = require('../controllers/estudiantesController.js');
  var grupo = require('../controllers/grupoController.js');
  var horario = require('../controllers/horarioController.js');
  var materia = require('../controllers/materiaController.js');
  var rol = require('../controllers/rolController.js');
  var usuario = require('../controllers/userController.js');

  //Routes for clase
  app.route('/api/clase')
    .get(clase.mostrarClases)
    .post(clase.nuevaClase);

  app.route('/api/clase/:idClase')
    .get(clase.buscarClase)
    .put(clase.actualizarClase)
    .delete(clase.borrarClase);

  //Routes for cohorte
  app.route('/api/cohorte')
    .get(cohorte.mostrarCohortes)
    .post(cohorte.nuevoCohorte);

  app.route('/api/cohorte/:idCohorte')
    .get(cohorte.buscarCohorte)
    .put(cohorte.actualizarCohorte)
    .delete(cohorte.borrarCohorte);

  //Routes for docentes
  app.route('/api/docente')
    .get(docente.mostrarDocentes)
    .post(docente.nuevoDocente);

  app.route('/api/docente/:idDocente')
    .get(docente.buscarDocente)
    .put(docente.actualizarDocente)
    .delete(docente.borrarDocente);

  app.route('/api/docentes/:idMateria')
    .get(docente.buscarDocenteMateria);

  //Routes for estudiantes
  app.route('/api/estudiante')
    .get(estudiante.mostrarEstudiantes)
    .post(estudiante.nuevoEstudiante);

  app.route('/api/estudiante/:idEstudiante')
    .get(estudiante.buscarEstudiante)
    .put(estudiante.actualizarEstudiante)
    .delete(estudiante.borrarEstudiante);

  app.route('/api/estudiantes/:grupo')
    .get(estudiante.buscarEstudianteGrupo);

  //Routes for grupo
  app.route('/api/grupo')
    .get(grupo.mostrarGrupos)
    .post(grupo.nuevoGrupo);

  app.route('/api/grupo/:idGrupo')
    .get(grupo.buscarGrupo)
    .put(grupo.actualizarGrupo)
    .delete(grupo.borrarGrupo);

  //Routes for horario
  app.route('/api/horario')
    .get(horario.mostrarHorarios)
    .post(horario.nuevoHorario);

  app.route('/api/horario/:idHorario')
    .get(horario.buscarHorario)
    .put(horario.actualizarHorario)
    .delete(horario.borrarHorario);

  app.route('/api/horarios/:dia/:grupo')
    .get(horario.HorarioGrupoDia);

  //Routes for materia
  app.route('/api/materia')
    .get(materia.mostrarMaterias)
    .post(materia.nuevaMateria);

  app.route('/api/materia/:idMateria')
    .get(materia.buscarMateria)
    .put(materia.actualizarMateria)
    .delete(materia.borrarMateria);

  //Routes for roles
  app.route('/api/rol')
    .get(rol.mostrarRoles)
    .post(rol.nuevoRol);

  app.route('/api/rol/:idRol')
    .get(rol.buscarRol)
    .put(rol.actualizarRol)
    .delete(rol.borrarRol);

  //Routes for usuarios
  app.route('/api/usuario')
    .get(usuario.mostrarUsuarios)
    .post(usuario.nuevoUsuario);
  
  app.route('/api/usuarios/:idRol')
    .get(usuario.usuariosRol);

  app.route('/api/login')
    .post(usuario.loginUsuario);

  app.route('/api/usuario/:idUsuario')
    .get(usuario.buscarUsuario)
    .put(usuario.actualizarUsuario)
    .delete(usuario.borrarUsuario);

  app.route('/api/usuario/cambiarpwd/:idUsuario')
    .put(usuario.actualizarContrasena);

};
