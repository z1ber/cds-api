-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 26, 2019 at 12:36 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Privileges for `cdsadmin`@`localhost`
-- Privileges for `cdsadmin`@`%`

GRANT USAGE ON *.* TO 'cdsadmin'@'localhost';
GRANT ALL PRIVILEGES ON `cdsadmin\_%`.* TO 'cdsadmin'@'localhost';
GRANT USAGE ON *.* TO 'cdsadmin'@'%';
GRANT ALL PRIVILEGES ON `cdsadmin\_%`.* TO 'cdsadmin'@'%';

--
-- Database: `horario_cds`
--
CREATE DATABASE IF NOT EXISTS `horario_cds` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `horario_cds`;

-- --------------------------------------------------------

--
-- Table structure for table `clase`
--

DROP TABLE IF EXISTS `clase`;
CREATE TABLE `clase` (
  `idClase` int(11) NOT NULL,
  `idMateria` int(11) NOT NULL,
  `idDocente` int(11) NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `dia` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clase`
--

INSERT INTO `clase` (`idClase`, `idMateria`, `idDocente`, `horaInicio`, `horaFin`, `dia`) VALUES
(1, 1, 1, '07:10:00', '08:50:00', 'Lunes'),
(2, 2, 2, '09:20:00', '11:50:00', 'Lunes'),
(3, 1, 1, '13:10:00', '14:50:00', 'Miercoles'),
(4, 2, 2, '15:20:00', '17:00:00', 'Viernes'),
(5, 2, 4, '09:20:00', '11:50:00', 'Miércoles'),
(6, 1, 1, '13:10:00', '02:50:00', 'Viernes');

-- --------------------------------------------------------

--
-- Table structure for table `cohorte`
--

DROP TABLE IF EXISTS `cohorte`;
CREATE TABLE `cohorte` (
  `idCohorte` int(11) NOT NULL,
  `nombreCohorte` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cohorte`
--

INSERT INTO `cohorte` (`idCohorte`, `nombreCohorte`) VALUES
(1, 'Cohorte 1'),
(2, 'Cohorte 2'),
(3, 'Cohorte 3'),
(4, 'Cohorte 4'),
(5, 'Cohorte 5');

-- --------------------------------------------------------

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
CREATE TABLE `docente` (
  `idDocente` int(11) NOT NULL,
  `idUsuario` varchar(25) NOT NULL,
  `idMateria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `docente`
--

INSERT INTO `docente` (`idDocente`, `idUsuario`, `idMateria`) VALUES
(1, 'FGKSA00001', 1),
(2, 'FGKSA00004', 2),
(3, 'FGKSA00007', 2),
(4, 'FGKSA00008', 2),
(5, 'FGKSA00010', 4),
(6, 'FGKSA00011', 3),
(7, 'FGKSA00012', 1);

-- --------------------------------------------------------

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
CREATE TABLE `estudiante` (
  `idEstudiante` int(11) NOT NULL,
  `idUsuario` varchar(25) NOT NULL,
  `idGrupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estudiante`
--

INSERT INTO `estudiante` (`idEstudiante`, `idUsuario`, `idGrupo`) VALUES
(1, 'FGKSA00002', 1),
(2, 'FGKSA00005', 2),
(3, 'FGKSA00006', 1),
(4, 'FGKSA00013', 1),
(5, 'FGKSA00014', 1),
(6, 'FGKSA00015', 1),
(7, 'FGKSA00016', 1),
(8, 'FGKSA00017', 1),
(9, 'FGKSA00018', 1),
(10, ' FGKSA00019', 1);

-- --------------------------------------------------------

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE `grupo` (
  `idGrupo` int(11) NOT NULL,
  `nombreGrupo` varchar(25) NOT NULL,
  `idCohorte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grupo`
--

INSERT INTO `grupo` (`idGrupo`, `nombreGrupo`, `idCohorte`) VALUES
(1, 'Grupo 1', 5),
(2, 'Grupo 2', 5);

-- --------------------------------------------------------

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
CREATE TABLE `horario` (
  `idHorario` int(11) NOT NULL,
  `idEstudiante` int(11) NOT NULL,
  `idClase` int(11) NOT NULL,
  `fechaInicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `horario`
--

INSERT INTO `horario` (`idHorario`, `idEstudiante`, `idClase`, `fechaInicio`) VALUES
(1, 1, 1, 1),
(2, 1, 1, 1),
(3, 1, 2, 1),
(4, 1, 3, 1),
(5, 1, 4, 1),
(6, 1, 5, 1),
(7, 1, 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `nombreMateria` varchar(50) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materia`
--

INSERT INTO `materia` (`idMateria`, `nombreMateria`, `descripcion`) VALUES
(1, 'Programacion Basica', 'Esta es una materia en la cual se ven los principios de logica y estructuracion necesaria para saber programar'),
(2, 'Habilidades para la vida', 'Materia en la cual los estudiantes salen de su zona segura para aprender a manejar situaciones cotidianas'),
(3, 'Traduccion de Textos', 'Materia con el objetivo de que el participante aprenda a traducir, interpretar y buscar de manera adecuada textos utiles en el idioma Ingles'),
(4, 'Matematica', 'Logica y Matematica Basica');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`idRol`, `nombreRol`) VALUES
(1, 'Administrador'),
(2, 'Docente'),
(3, 'Estudiante');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreLogin` varchar(25) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `apellidoUsuario` varchar(50) NOT NULL,
  `dui` varchar(10) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombreLogin`, `password`, `nombreUsuario`, `apellidoUsuario`, `dui`, `direccion`, `telefono`, `idRol`) VALUES
(1, 'FGKSA00001', 'MAGU2019FGKSA', 'Mauricio', 'Gudiel', '12345678-9', 'En su casa, con su numero de casa y calle', '12345678', 2),
(2, 'FGKSA00002', 'KADI2019FGKSA', 'Karina', 'Diaz', '98765432-1', 'En algun lugar de este mundo', '87654321', 3),
(3, 'FGKSA00003', 'ULSA2019FGKSA', 'Ulises', 'Samayoa', '24681012-2', 'En una parte de El Salvador la cual no recuerdo', '22334455', 1),
(4, 'FGKSA00004', 'ROGOFGKSA2019', 'Rogelio', 'Gonzales', '21212121-2', 'En otra casa', '23452345', 2),
(5, 'FGKSA00005', 'CAOLFGKSA2019', 'Carlos Eduardo', 'Olano Mendez', '24402440', 'Cerca del escalon', '45654323-2', 3),
(6, 'FGKSA00006', 'ROQU2019FGKSA', 'Ronald Adalberto', 'Quevedo Rodriguez', '05067125-9', 'Residencial Villa Arizona', '24402449', 3),
(7, 'FGKSA00007', 'SIMU2019FGKSA', 'Silvia', 'Munguia', '12345678-9', 'Chalchuapa', '2525-2525', 2),
(8, 'FGKSA00008', 'MOME2019FGKSA', 'Monica', 'Menjivar', '12345678-9', 'Santa Ana', '2424-2424', 2),
(10, 'FGKSA00010', 'IRPE2019FGKSA', 'Iris', 'Peraza', '15459865-8', 'Santa Ana', '2562-4585', 2),
(11, 'FGKSA00011', 'KAHE2019FGKSA', 'Karla', 'Hernandez', '85978545-9', 'Santa Ana', '2456-6595', 2),
(12, 'FGKSA00012', 'NOMO2019FGKSA', 'Noel', 'Moran', '54685498-9', 'Santa Ana', '2305-8578', 2),
(13, 'FGKSA00013', 'EVVI2019FGKSA', 'Ever ', 'Viera', '7848962-8', 'Santa Ana', '2685-9565', 3),
(14, 'FGKSA00014', 'FRMO2019FGKSA', 'Francisco', 'Moran', '4889846-8', 'El Refugio', '2016-5488', 3),
(15, 'FGKSA00015', 'FEMO2019FGKSA', 'Fernando', 'Morales', '85496328-9', 'Atiquizaya', '2469-8952', 3),
(16, 'FGKSA00016', 'GLGA2019FGKSA', 'Glenda', 'Garcia', '25468521-8', 'Santa Ana', '2512-9869', 3),
(17, 'FGKSA00017', 'WILE2019FGKSA', 'Wilmer', 'Lemus', '52182569-8', 'Chalchuapa', '2685-9698', 3),
(18, 'FGKSA00018', 'BYMA2019FGKSA', 'Byron', 'Martinez', '23513654-8', 'El Refugio', '2425-5465', 3),
(19, 'FGKSA00019', 'VLVA2019FGKSA', 'Vladimir', 'Valdes', '4564126-8', 'El Congo', '2565-4878', 3);

--
-- Triggers `usuario`
--
DROP TRIGGER IF EXISTS `nombre_usuario`;
DELIMITER $$
CREATE TRIGGER `nombre_usuario` BEFORE INSERT ON `usuario` FOR EACH ROW BEGIN
  DECLARE next_id INT;
  SET next_id = (SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='usuario');
  SET NEW.nombreLogin = CONCAT('FGKSA', LPAD(next_id, 5, '0'));
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`idClase`);

--
-- Indexes for table `cohorte`
--
ALTER TABLE `cohorte`
  ADD PRIMARY KEY (`idCohorte`);

--
-- Indexes for table `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`idDocente`);

--
-- Indexes for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idEstudiante`);

--
-- Indexes for table `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idGrupo`);

--
-- Indexes for table `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`idHorario`);

--
-- Indexes for table `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clase`
--
ALTER TABLE `clase`
  MODIFY `idClase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `cohorte`
--
ALTER TABLE `cohorte`
  MODIFY `idCohorte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `docente`
--
ALTER TABLE `docente`
  MODIFY `idDocente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idEstudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `grupo`
--
ALTER TABLE `grupo`
  MODIFY `idGrupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `horario`
--
ALTER TABLE `horario`
  MODIFY `idHorario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
