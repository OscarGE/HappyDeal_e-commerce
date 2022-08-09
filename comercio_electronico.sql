-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2022 a las 03:20:50
-- Versión del servidor: 10.4.22-MariaDB-log
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comercio_electronico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_car` int(11) NOT NULL,
  `id_usr` int(10) NOT NULL,
  `id_produc` int(10) NOT NULL,
  `cantidad_producto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(10) NOT NULL,
  `comentario` text NOT NULL,
  `fecha_comentario` datetime NOT NULL,
  `id_produc` int(10) NOT NULL,
  `id_usr` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id_comentario`, `comentario`, `fecha_comentario`, `id_produc`, `id_usr`) VALUES
(1, 'Interesante. El producto es bueno y el precio no esta nada mal.', '2022-07-09 20:05:46', 5, 3),
(2, 'Todo bien con el producto, pero tardo mucho en llegar. ', '2022-07-10 19:03:48', 5, 7),
(3, 'El material es de muy buena calidad. ', '2022-07-10 19:04:46', 9, 7),
(4, '¿Alguien sabe si el producto tiene alguna clase de seguro? ', '2022-07-10 19:06:20', 7, 7),
(5, 'Excelente producto. Lo recomiendo mucho. 👍💯 ', '2022-07-10 19:07:49', 6, 6),
(7, 'El producto es excelente y el sabor igual. Tengo años comprando Santa Clara y al ver la promoción aquí decidí aprovechar. El envío fue rápido (1 día con prime) y todo bien, no viene maltratado ni derramado.\r\nVoy a estar actualizando las fotos con la fecha de caducidad en la que me llegan a mí.\r\n', '2022-07-10 19:10:22', 10, 6),
(8, 'Llego bien el producto, no tengo tema en ese sentido, el problema es que no se parece a las imágenes que exponen, el color si es, los botones llegaron en blanco y tenían que ser negros, en la imagen se muestra sin bolsillo y con sujetador de mangas, el que me llegó, llegó con bolsillo al nivel del pecho :( es una lástima ya que pensaba comprar más productos pero ya no me fío.', '2022-07-10 19:11:08', 8, 6),
(9, 'Mi laptop del 2010 con una pantalla lcd que consume mucho y una CPU de 45nm le dura el doble la batería que a esta laptop con la pantalla oled que consume poco y su eficiente CPU de 10nm.\r\nMi unidad vino con un defecto de fábrica, la esquina está afilada.', '2022-07-10 19:11:45', 5, 6),
(10, 'A mi perro le gustó mucho este artículo. ', '2022-07-17 11:54:07', 7, 3),
(11, 'Lo que siempre quise, una mochila con múltiples compartimentos y hasta con candado para las cosas importantes y su cable de carga para que conectes tu banco de energía y nunca te quedes sin batería, además tiene una pequeña cinta reflejante si eres ciclista o andas caminando por ahí en la noche (raro pero podría pasar) y es muy cómoda. Recomendable.', '2022-07-31 18:44:10', 15, 3);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `comentario_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `comentario_v1` (
`id_comentario` int(10)
,`comentario` text
,`fecha_comentario` datetime
,`id_produc` int(10)
,`id_usr` int(10)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `comentario_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `comentario_v2` (
`id_comentario` int(10)
,`comentario` text
,`fecha_comentario` datetime
,`id_produc` int(10)
,`id_usr` int(10)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta_usr`
--

CREATE TABLE `cuenta_usr` (
  `id_usr` int(10) NOT NULL,
  `usr_name` varchar(45) NOT NULL,
  `usr_passw` varchar(45) NOT NULL,
  `is_admin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuenta_usr`
--

INSERT INTO `cuenta_usr` (`id_usr`, `usr_name`, `usr_passw`, `is_admin`) VALUES
(2, 'oscar64', 'eeee80342778e7b497d507f89094b10d', 0),
(3, 'Arcadia', '23dbf3a3354c1a3ec91b796820e57130', 0),
(4, 'jacarc25', 'c2b5425141fdb98f955b2b0e0ed30a39', 0),
(5, 'flor34', '7c279bfe212e6db00358a8ffb8fec12c', 0),
(6, 'soni76', '520141d0f0b6ddf8e5bf01e1be44b81a', 0),
(7, 'steve223', '25f76d4944e1c6eda1f7bb182c2260a2', 1),
(8, 'james2432', '80e43ec2d1e732cb836237595842eb75', 0),
(10, 'admin1', '0192023a7bbd73250516f069df18b500', 1),
(11, 'admin2', 'c83c324bf95175a714de1831e797d6db', 1),
(19, 'OliverP48', '81dc9bdb52d04dc20036dbd8313ed055', 0);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `cuenta_usr_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `cuenta_usr_v1` (
`id_usr` int(10)
,`usr_name` varchar(45)
,`usr_passw` varchar(45)
,`is_admin` tinyint(4)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `cuenta_usr_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `cuenta_usr_v2` (
`id_usr` int(10)
,`usr_name` varchar(45)
,`usr_passw` varchar(45)
,`is_admin` tinyint(4)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(10) NOT NULL,
  `id_usr` int(10) NOT NULL,
  `cobro` int(20) NOT NULL,
  `fecha_compra` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id_factura`, `id_usr`, `cobro`, `fecha_compra`) VALUES
(26, 3, 6453, '2022-07-30 14:37:15'),
(27, 3, 1290, '2022-07-30 14:38:28'),
(28, 6, 11642, '2022-07-30 14:42:14'),
(29, 5, 525, '2022-07-30 14:49:23'),
(30, 7, 1399, '2022-07-30 14:53:24'),
(31, 7, 2798, '2022-07-30 14:54:51'),
(32, 8, 237, '2022-07-30 15:08:13'),
(33, 8, 6908, '2022-07-30 15:09:27'),
(34, 3, 4182, '2022-07-31 18:45:48');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `factura_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `factura_v1` (
`id_factura` int(10)
,`id_usr` int(10)
,`cobro` int(20)
,`fecha_compra` datetime
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `factura_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `factura_v2` (
`id_factura` int(10)
,`id_usr` int(10)
,`cobro` int(20)
,`fecha_compra` datetime
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gustos_depa_usr`
--

CREATE TABLE `gustos_depa_usr` (
  `id_usr` int(10) NOT NULL,
  `depa` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gustos_depa_usr`
--

INSERT INTO `gustos_depa_usr` (`id_usr`, `depa`) VALUES
(2, 'Electrónicos'),
(2, 'Mascotas'),
(4, 'Mascotas'),
(5, 'Papelería'),
(6, 'Ropa'),
(6, 'Alimentos'),
(7, 'Papelería'),
(8, 'Deportes'),
(8, 'Mascotas'),
(3, 'Electrónicos'),
(19, 'Electrónicos'),
(19, 'Deportes'),
(19, 'Ropa');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `gustos_depa_usr_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `gustos_depa_usr_v1` (
`id_usr` int(10)
,`depa` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `gustos_depa_usr_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `gustos_depa_usr_v2` (
`id_usr` int(10)
,`depa` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_factura`
--

CREATE TABLE `info_factura` (
  `id_factura` int(10) NOT NULL,
  `id_produc` int(10) NOT NULL,
  `cantidad_producto` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `info_factura`
--

INSERT INTO `info_factura` (`id_factura`, `id_produc`, `cantidad_producto`) VALUES
(26, 13, 1),
(26, 9, 1),
(27, 8, 2),
(28, 14, 1),
(28, 9, 1),
(28, 12, 2),
(29, 10, 1),
(29, 7, 1),
(30, 12, 1),
(31, 12, 2),
(32, 7, 1),
(33, 9, 2),
(34, 15, 2),
(34, 9, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_usr`
--

CREATE TABLE `info_usr` (
  `id_usr` int(10) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `fecha_nacimiento` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `direccion_calle` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `codigo_postal` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `info_usr`
--

INSERT INTO `info_usr` (`id_usr`, `nombre`, `apellido`, `fecha_nacimiento`, `email`, `telefono`, `pais`, `direccion_calle`, `ciudad`, `estado`, `codigo_postal`) VALUES
(2, 'Oscar', 'González Esparza', '01-08-1999', 'oscarge199902@gmail.com', '524494526022', 'México', 'Calle De Los Gallos 129', 'Aguascalientes', 'Aguascalientes', '20126'),
(3, 'Arcadia Alane', 'Reed Weber', '13-07-2004', 'arcman543@hotmail.com', '3453455854', 'Canada', '800 N State College Blvd', 'Fullerton', 'California', '54743'),
(4, 'Jackie ', 'R. Johnson', '09-02-2001', 'jacart@hotmail.com', '5458785499', 'Estados_Unidos', '3271 Wiseman Street', 'Oak Ridge', 'Michigan', '37830'),
(5, 'Florentina', 'R. Khang', '13-02-2004', 'florentina@superrito.com', '3233289711', 'Canada', '4055 Bayliss Ave', 'Memphis', 'Tennessee', '38108'),
(6, 'Sonia', 'D. Rodriguez', '09-10-1980', 'sonia@superrito.com', '3233289711', 'Estados_Unidos', '27200 Novi Rd', 'Novi', 'Michigan', '48377'),
(7, 'Steven', 'N. Boyle', '29-11-1980', 'steven@superrito.com', '9082720184', 'Canada', '1402 Grandview Rd', 'Beaver', 'Wisconsin', '25813'),
(8, 'James ', 'P. Thompson', '23-06-1976', 'juames@gustr.com', '2035944928', 'Estados_Unidos', '4306 N Sheridan Rd', 'Peoria', 'Indiana', '61614'),
(10, 'Oscar ', 'González Esparza', '06-10-1998', 'oscarge199902@gmail.com', '524494526022', 'México', 'Calle De Los Gallos 129', 'Aguascalientes', 'Aguascalientes', '20126'),
(11, 'Oliver', 'Peralta Delgado', '15-05-2000', 'oliver23@gmail.com', '4498324399', 'México', 'Calle de la paz 323', 'Loreto', 'Zacatecas', '545775'),
(19, 'Oliver', 'Peralta', '09-08-2022', 'oliver@gmail.com', '4495464353', 'Canada', 'Calle verde #453', 'Aguascalientes ', 'Aguascalientes ', '434535');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `info_usr_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `info_usr_v1` (
`id_usr` int(10)
,`nombre` varchar(80)
,`apellido` varchar(80)
,`fecha_nacimiento` varchar(45)
,`email` varchar(45)
,`telefono` varchar(45)
,`pais` varchar(45)
,`direccion_calle` varchar(45)
,`ciudad` varchar(45)
,`estado` varchar(45)
,`codigo_postal` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `info_usr_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `info_usr_v2` (
`id_usr` int(10)
,`nombre` varchar(80)
,`apellido` varchar(80)
,`fecha_nacimiento` varchar(45)
,`email` varchar(45)
,`telefono` varchar(45)
,`pais` varchar(45)
,`direccion_calle` varchar(45)
,`ciudad` varchar(45)
,`estado` varchar(45)
,`codigo_postal` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_produc` int(10) NOT NULL,
  `nom_produc` varchar(45) NOT NULL,
  `descripcion_produc` varchar(100) NOT NULL,
  `imagen_produc` varchar(45) NOT NULL,
  `precio_produc` int(10) NOT NULL,
  `existencia_produc` int(5) NOT NULL,
  `depa` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_produc`, `nom_produc`, `descripcion_produc`, `imagen_produc`, `precio_produc`, `existencia_produc`, `depa`) VALUES
(5, 'Asus VivoBook 15', 'FHD, Core i5 11th Gen, Intel Iris Xᵉ Graphics, 8Gb RAM, 512 SSD, Windows 11', 'Laptop Asus Vivobook.jpg', 12599, 2, 'Electrónicos'),
(6, 'Apple AirPods Pro', 'Devoluciones: Sólo productos dañados, inoperantes al primer uso o sin abrir en caja original sellada', 'Apple AirPods Pro.jpg', 6543, 5, 'Electrónicos'),
(7, 'Cuernos de reno', 'Disfraz de cuernos de reno, disfraz de fiesta para mujeres, hombres y niños\r\nIncluye cuernos de reno', 'BWOGUE.jpg', 237, 47, 'Mascotas'),
(8, 'COOFANDY Camisa Henley', 'algodón y Lino\r\nCierre de Botón\r\nLavar a máquina\r\nTela de alta calidad: esta camisa de lino está hec', 'Coofandy Hombres.jpg', 645, 77, 'Ropa'),
(9, 'Guante RAWLINGS', 'Rendimiento de béisbol de siguiente nivel: este guante R9 viene con una carcasa suave, duradera y to', 'Guante RAWLINGS.jpg', 3454, 33, 'Deportes'),
(10, 'Leche Santa Clara 12', '>Leche entera de vaca pura 100%\r\n>Textura cremosa\r\n>Rica en proteínas, calcio y adicionada con vitam', 'Leche Santa Clara 12.jpg', 288, 39, 'Alimentos'),
(11, 'Moto G8 Plus', '>Cámara trasera 13MP + 2MP (macro) + Cámara Frontal >5 MP, Zoom de 4X, single LED flash, Procesador ', 'Moto G8 Plus.jpg', 2356, 27, 'Electrónicos'),
(12, 'Set De Dibujo D 142 Pzas', 'Art 101 es un proveedor líder de productos artísticos innovadores y divertidos con 13 años de experi', 'Set De Dibujo D 142 Pzas.jpg', 1399, 15, 'Papelería'),
(13, 'Tablet Huawei MediaPad T3 7', 'Amplia vista abierta,HUAWEI MatePad T 10 ofrece una pantalla HD de 9,7 pulgadas, delicadamente empaq', 'Tablet Huawei MediaPad T3 7.jpg', 2999, 4, 'Electrónicos'),
(14, 'TV Samsung 32 HD Smart TV LED', 'HD 720p: enjoy a viewing experience with 2x the clarity and detail\r\nSmart TV: access your favorite p', 'TV Samsung 32 HD Smart TV LED.jpg', 5390, 23, 'Electrónicos'),
(15, 'Mochila para hombre Mochila', 'Cierre de Cremallera\r\n【Diseño de puerto USB y para auriculares】 un puerto de carga USB externo con u', 'mochila.jpg', 364, 48, 'Papelería');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `producto_v1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `producto_v1` (
`id_produc` int(10)
,`nom_produc` varchar(45)
,`descripcion_produc` varchar(100)
,`imagen_produc` varchar(45)
,`precio_produc` int(10)
,`existencia_produc` int(5)
,`depa` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `producto_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `producto_v2` (
`id_produc` int(10)
,`nom_produc` varchar(45)
,`descripcion_produc` varchar(100)
,`imagen_produc` varchar(45)
,`precio_produc` int(10)
,`existencia_produc` int(5)
,`depa` varchar(45)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `comentario_v1`
--
DROP TABLE IF EXISTS `comentario_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `comentario_v1`  AS SELECT `comentario`.`id_comentario` AS `id_comentario`, `comentario`.`comentario` AS `comentario`, `comentario`.`fecha_comentario` AS `fecha_comentario`, `comentario`.`id_produc` AS `id_produc`, `comentario`.`id_usr` AS `id_usr` FROM `comentario` WHERE char_length(`comentario`.`comentario`) <= 60 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `comentario_v2`
--
DROP TABLE IF EXISTS `comentario_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `comentario_v2`  AS SELECT `comentario`.`id_comentario` AS `id_comentario`, `comentario`.`comentario` AS `comentario`, `comentario`.`fecha_comentario` AS `fecha_comentario`, `comentario`.`id_produc` AS `id_produc`, `comentario`.`id_usr` AS `id_usr` FROM `comentario` WHERE char_length(`comentario`.`comentario`) > 60 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `cuenta_usr_v1`
--
DROP TABLE IF EXISTS `cuenta_usr_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cuenta_usr_v1`  AS SELECT `cuenta_usr`.`id_usr` AS `id_usr`, `cuenta_usr`.`usr_name` AS `usr_name`, `cuenta_usr`.`usr_passw` AS `usr_passw`, `cuenta_usr`.`is_admin` AS `is_admin` FROM `cuenta_usr` WHERE `cuenta_usr`.`is_admin` = 0 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `cuenta_usr_v2`
--
DROP TABLE IF EXISTS `cuenta_usr_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cuenta_usr_v2`  AS SELECT `cuenta_usr`.`id_usr` AS `id_usr`, `cuenta_usr`.`usr_name` AS `usr_name`, `cuenta_usr`.`usr_passw` AS `usr_passw`, `cuenta_usr`.`is_admin` AS `is_admin` FROM `cuenta_usr` WHERE `cuenta_usr`.`is_admin` = 1 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `factura_v1`
--
DROP TABLE IF EXISTS `factura_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `factura_v1`  AS SELECT `factura`.`id_factura` AS `id_factura`, `factura`.`id_usr` AS `id_usr`, `factura`.`cobro` AS `cobro`, `factura`.`fecha_compra` AS `fecha_compra` FROM `factura` WHERE `factura`.`cobro` <= 2000 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `factura_v2`
--
DROP TABLE IF EXISTS `factura_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `factura_v2`  AS SELECT `factura`.`id_factura` AS `id_factura`, `factura`.`id_usr` AS `id_usr`, `factura`.`cobro` AS `cobro`, `factura`.`fecha_compra` AS `fecha_compra` FROM `factura` WHERE `factura`.`cobro` > 2000 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `gustos_depa_usr_v1`
--
DROP TABLE IF EXISTS `gustos_depa_usr_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gustos_depa_usr_v1`  AS SELECT `gustos_depa_usr`.`id_usr` AS `id_usr`, `gustos_depa_usr`.`depa` AS `depa` FROM `gustos_depa_usr` WHERE `gustos_depa_usr`.`id_usr` MOD 2 = 0 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `gustos_depa_usr_v2`
--
DROP TABLE IF EXISTS `gustos_depa_usr_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gustos_depa_usr_v2`  AS SELECT `gustos_depa_usr`.`id_usr` AS `id_usr`, `gustos_depa_usr`.`depa` AS `depa` FROM `gustos_depa_usr` WHERE `gustos_depa_usr`.`id_usr` MOD 2 > 0 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `info_usr_v1`
--
DROP TABLE IF EXISTS `info_usr_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `info_usr_v1`  AS SELECT `i`.`id_usr` AS `id_usr`, `i`.`nombre` AS `nombre`, `i`.`apellido` AS `apellido`, `i`.`fecha_nacimiento` AS `fecha_nacimiento`, `i`.`email` AS `email`, `i`.`telefono` AS `telefono`, `i`.`pais` AS `pais`, `i`.`direccion_calle` AS `direccion_calle`, `i`.`ciudad` AS `ciudad`, `i`.`estado` AS `estado`, `i`.`codigo_postal` AS `codigo_postal` FROM (`cuenta_usr` `c` join `info_usr` `i` on(`c`.`id_usr` = `i`.`id_usr`)) WHERE `c`.`is_admin` = 0 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `info_usr_v2`
--
DROP TABLE IF EXISTS `info_usr_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `info_usr_v2`  AS SELECT `i`.`id_usr` AS `id_usr`, `i`.`nombre` AS `nombre`, `i`.`apellido` AS `apellido`, `i`.`fecha_nacimiento` AS `fecha_nacimiento`, `i`.`email` AS `email`, `i`.`telefono` AS `telefono`, `i`.`pais` AS `pais`, `i`.`direccion_calle` AS `direccion_calle`, `i`.`ciudad` AS `ciudad`, `i`.`estado` AS `estado`, `i`.`codigo_postal` AS `codigo_postal` FROM (`cuenta_usr` `c` join `info_usr` `i` on(`c`.`id_usr` = `i`.`id_usr`)) WHERE `c`.`is_admin` = 1 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `producto_v1`
--
DROP TABLE IF EXISTS `producto_v1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `producto_v1`  AS SELECT `producto`.`id_produc` AS `id_produc`, `producto`.`nom_produc` AS `nom_produc`, `producto`.`descripcion_produc` AS `descripcion_produc`, `producto`.`imagen_produc` AS `imagen_produc`, `producto`.`precio_produc` AS `precio_produc`, `producto`.`existencia_produc` AS `existencia_produc`, `producto`.`depa` AS `depa` FROM `producto` WHERE `producto`.`depa` in ('Electrónicos','Deportes','Ropa') ;

-- --------------------------------------------------------

--
-- Estructura para la vista `producto_v2`
--
DROP TABLE IF EXISTS `producto_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `producto_v2`  AS SELECT `producto`.`id_produc` AS `id_produc`, `producto`.`nom_produc` AS `nom_produc`, `producto`.`descripcion_produc` AS `descripcion_produc`, `producto`.`imagen_produc` AS `imagen_produc`, `producto`.`precio_produc` AS `precio_produc`, `producto`.`existencia_produc` AS `existencia_produc`, `producto`.`depa` AS `depa` FROM `producto` WHERE `producto`.`depa` in ('Papelería','Mascotas','Alimentos') ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_car`),
  ADD KEY `id_usr` (`id_usr`),
  ADD KEY `id_produc` (`id_produc`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_product` (`id_produc`),
  ADD KEY `id_usr` (`id_usr`);

--
-- Indices de la tabla `cuenta_usr`
--
ALTER TABLE `cuenta_usr`
  ADD PRIMARY KEY (`id_usr`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `id_usr` (`id_usr`);

--
-- Indices de la tabla `gustos_depa_usr`
--
ALTER TABLE `gustos_depa_usr`
  ADD KEY `id_usr` (`id_usr`);

--
-- Indices de la tabla `info_factura`
--
ALTER TABLE `info_factura`
  ADD KEY `id_factura` (`id_factura`),
  ADD KEY `id_produc` (`id_produc`);

--
-- Indices de la tabla `info_usr`
--
ALTER TABLE `info_usr`
  ADD KEY `id_usr` (`id_usr`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_produc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cuenta_usr`
--
ALTER TABLE `cuenta_usr`
  MODIFY `id_usr` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_produc` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `cuenta_usr` (`id_usr`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_produc`) REFERENCES `producto` (`id_produc`);

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_produc`) REFERENCES `producto` (`id_produc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_usr`) REFERENCES `cuenta_usr` (`id_usr`);

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `cuenta_usr` (`id_usr`);

--
-- Filtros para la tabla `gustos_depa_usr`
--
ALTER TABLE `gustos_depa_usr`
  ADD CONSTRAINT `gustos_depa_usr_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `cuenta_usr` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `info_factura`
--
ALTER TABLE `info_factura`
  ADD CONSTRAINT `info_factura_ibfk_1` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id_factura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `info_factura_ibfk_2` FOREIGN KEY (`id_produc`) REFERENCES `producto` (`id_produc`);

--
-- Filtros para la tabla `info_usr`
--
ALTER TABLE `info_usr`
  ADD CONSTRAINT `info_usr_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `cuenta_usr` (`id_usr`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
