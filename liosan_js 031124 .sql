-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2024 a las 00:41:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `liosan_js`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `puntuacion` int(10) NOT NULL,
  `comentario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `nombre`, `puntuacion`, `comentario`) VALUES
(1, 'Luisillo el pillo', 10, 're piola'),
(2, 'Luisillo el pillo', 10, 're piola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `celular` int(10) NOT NULL,
  `celular2` int(10) NOT NULL,
  `whatsapp` varchar(15) NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `descripcion` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `celular`, `celular2`, `whatsapp`, `direccion`, `descripcion`) VALUES
(1, 11223344, 1122334455, '1122334455', 'Tres Arroyos 4523, B1874 Villa Dominico, Provincia de Buenos', 'Somos una Restaurante de comida Peruana, brindamos la mejor sazón de comida criolla, mariscos y nuestros riquísimos pollos a la brasa! '),
(2, 11223344, 1122334455, '1122334455', 'Tres Arroyos 4523, B1874 Villa Dominico, Provincia de Buenoseeeeeeeeeeeeeeeeee', 'Somos una Restaurante de comida Peruana, brindamos la mejor sazón de comida criolla, mariscos y nuestros riquísimos pollos a la brasaeeeeeeeeeeeeeee! ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(255) NOT NULL,
  `n_mesa` int(255) NOT NULL,
  `n_platillo` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `medio_pago` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `n_mesa`, `n_platillo`, `fecha_hora`, `medio_pago`) VALUES
(1, 2, 'NUEVO PLATILLO 1', '2024-10-09 00:00:00', ''),
(2, 22, 'Nuevo Platillo 22', '2024-10-09 00:00:00', ''),
(3, 1, 'Nuevo Platillo', '2024-10-09 00:00:00', ''),
(4, 12, 'Nuevo Platillo 12', '2024-10-09 00:00:00', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

CREATE TABLE `platillos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `tipo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `platillos`
--

INSERT INTO `platillos` (`id`, `nombre`, `descripcion`, `precio`, `foto`, `tipo`) VALUES
(46, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '', 'uploads/d3O4tJvmE6ePZGlyB7q9FKDo8I2ZvfQPsJkGgDj7.jpg', 'Entrada'),
(47, 'Salchi Papa', 'Papas fritas y salchicas bien fritas para picar.', '7.000', 'uploads/32IfK4pyQ11BA8hyoMmFGYMWVHXECGxLM1UMvnHt.jpg', 'Entrada'),
(48, 'Wantan Frito', 'Masa fina con relleno de pollo', 'grande 8.000/ mediana 4.500', 'uploads/F7UKwG0EgQQNe71EMLUohkwrwxF7oXY6RLEhL32p.jpg', 'Entrada'),
(50, 'Pollo a la Brasa', 'Pollo con papas fritas, ensalada y condimientos Peruanos(mayonesa, ají y vinagreta)', '18.000', 'uploads/HpXmQznBSoCFbRLpsxbkQwXzxCNDyzgk8pPxeuyR.jpg', 'Pollos'),
(51, 'Medio', 'Medio pollo con papas fritas, ensalada y condimentos Peruanos.', '11.000', 'uploads/fP5DvU1Y7mk0XMsnguDelkoDalMNbd0h4HiEkSwU.jpg', 'Pollos'),
(52, 'Cuarto', 'Cuarto de pollo con papas fritas, ensalada y condimientos Peruanos.', '7.000', 'uploads/h4SIz2A5cUoeFvvnyD5OZfQBXjnDVUD1gVVw2btl.jpg', 'Pollos'),
(53, 'Pollo Broaster Grande', 'Pollo tierno enharinado con una ensalada fresca y papas fritas.', '22.000', 'uploads/Vv8ljBo72qY7ObUEgNW9vekWqxaaIbUCGfbjcvWA.jpg', 'Pollos'),
(54, 'Pollo Broaster Mediano', 'Medio Pollo tierno enharinado con una ensalada fresca y papas fritas.', '13.000', 'uploads/hzWMFeCbikAC8GUjpazZzPbq1SG6RxbcnxVPPlE3.jpg', 'Pollos'),
(55, 'Pollo Broaster Pequeño', 'Cuarto Pollo tierno enharinado con una ensalada fresca y papas fritas.', '8.000', 'uploads/EFRPuWdsJxZYW0udshcIuSnxFuM7tMGPbtqlfxCf.jpg', 'Pollos'),
(56, 'Ceviche de Pescado / ceviche mixto grande', 'Pescado cocido con limón, con su leche de tigre y su canchita.', '22.000/22.000', 'uploads/fdT4cP7TKphyQJtXHuIPcWULs0GOBosLBwzlfob3.jpg', 'Mariscos'),
(57, 'Ceviche de Pescado/ ceviche mixto pequeño', 'Pescado cocido con limón, con su leche de tigre y su canchita.', '20.000/20.000', 'uploads/KEwxogJhKCYUOEOgl0qalIEYrCLvXPGIcuQR1ivu.jpg', 'Mariscos'),
(58, 'Ronda Marina', 'Arroz con mariscos, leche de tigre con mix de mariscos crujientes, ceviche y su canchita.', '30.000', 'uploads/UX6dO052ofuknqwzeFeRN3LmSsy2UcSUgtFSM8TI.jpg', 'Mariscos'),
(59, 'Arroz con Mariscos', 'Arroz con mariscos y su ensalada criolla.', '18.000', 'uploads/CBUof2CNwSO51aNLBIBwB21sTwYd4bS9cmbNrKfM.jpg', 'Mariscos'),
(60, 'Rústico', 'Leche de tigre con mix de mariscos crujientes, ceviche y su canchita.', '25.000', 'uploads/ACkZr6r3zbKcf4tfJVXulQnUwuVTOhJDXRKA7ql3.jpg', 'Mariscos'),
(61, 'Jalea Mixta Grande', 'Mix de mariscos, aros de calamar bien crujientes, con su ensalada criolla.', '22.000', 'uploads/Q2Zzs9YdQClN0L0HbOhmdIP3mXdnPIHgmnbOjk4I.jpg', 'Mariscos'),
(62, 'Jalea Mixta Pequeña', 'Mix de mariscos, aros de calamar bien crujientes, con su ensalada criolla.', '20.000', 'uploads/HUwRouTOu91NCRBvlSdOrqRooJfBYU8CshTrnPKn.jpg', 'Mariscos'),
(63, 'Rabas Grande', 'Aros de calamar con su ensalada criolla.', '25.000', 'uploads/b4M5LslxmnXTdWdYxBhub9fmL61iI8PBrEHAo9eE.jpg', 'Mariscos'),
(64, 'Rabas Pequeño', 'Aros de calamar con su ensalada criolla.', '22.000', 'uploads/aMSaNMF7N4Sy9hFTqTV7lwMMgYpmEjGabEJoZ1pr.jpg', 'Mariscos'),
(65, 'Pescado Frito', 'Pescado frito con arroz y ensalada criolla.', '15.000', 'uploads/oxP2lmYxvQHyIaaZ2HikD8I71MldBDTU1MYEfWtT.jpg', 'Mariscos'),
(66, 'Chaufa de Pollo', 'Arroz con trozosde pollo, huevo y verdeo salteado al  wok, con salsa de soja.', '7.000', 'uploads/2En1EtzdBjga1zUeWG6aTTzeXE39w8WHAVxo615B.jpg', 'Chifa'),
(67, 'Chaufa de Pollo Pequeño', 'Trozos de pollo, huevo y verdeo salteado con wok, aderezado con salsa de soja.', '5.000', 'uploads/3KaGdU9J67xMJhIRxuxO4hH1iSK2F8FEVZVlnrgJ.jpg', 'Chifa'),
(68, 'Chaufa de Carne', 'Trozos de carne, huevo y verdeo salteado con wok, aderezado con salsa de soja.', '7.500', 'uploads/Ac75pa0IT8zSdxypMsRNuFHy9rbh4931lNaeVnVt.jpg', 'Chifa'),
(69, 'Chaufa Mixto', 'Trozos de pollo y carne, huevo, verdeo salteado con wok aderezado con salsa de soja.', '8.500', 'uploads/xaCqe98CxH7sppStA6KnM0J5Pd2U3GgzA41PMUTY.jpg', 'Chifa'),
(70, 'Chaufa con Mariscos', 'Mix de mariscos, huevo, verdeo y morrón salteado con wok aderezado con salsa de soja.', '18.000', 'uploads/6oBjEuXl3oig9mBFftX8SjMWoPJppjOSNUClyR0z.jpg', 'Chifa'),
(71, 'Tallarín Chifa con Pollo', 'Fideos y pollo ahumado con brotes de soja, morrón, brócoli y salsa de soja.', '8.000', 'uploads/tBt5YfXpYC6bwQbU3aGdZMYPVbmvIKysyqd2Se4h.jpg', 'Chifa'),
(72, 'Tallarín Chifa con Carne', 'Fideos y carne ahumado con brotes de soja, morrón, brócoli y salsa de soja.', '9.000', 'uploads/lHc6byQBZD5qLnwtq5lSmvnxI0XCaHfCcGLNOjJj.jpg', 'Chifa'),
(73, 'Tallarín Chifa con Langostino', 'Fideos y langostinos ahumados con brotes de soja, morrón, brócoli y salsa de soja.', '18.000', 'uploads/e0mpst0y9nUUbVZ6k7RZAgZU60dWYpgGQeGXVcyD.jpg', 'Chifa'),
(74, 'Combinado de Pollo', 'Chufa y tallarín chifa de pollo en un solo plato para bien servido.', '8.000', 'uploads/ThUxA7pT6URX1vmZW6aQ6clVEx4PnxyfU2PsfsXR.jpg', 'Chifa'),
(75, 'Pollo con Verduras', 'Chaufa de pollo, brócoli, morrón y trozos de pollo aderezados con salsa de soja.', '10.000', 'uploads/AZzOB0whca6DcxpjsEWEoRFC8aLJd02wCMoSeIVD.jpg', 'Chifa'),
(76, 'Taipá a la Plancha', 'Mix de carnes y verduras a la plancha.', '25.000', 'uploads/yj8VP3oFLwfKB9khsES6aQSufYcvBjgQmwlhSXgq.mp4     ', 'Chifa Video'),
(77, 'Caldo de Gallina', 'Caldo de pollo con fideos largos, huevo, su canchita y verdeo.', '7.000', 'uploads/QHbve16CtQDsoF8TFtf8Tqi1B9CubOsshXeHFMYR.jpg', 'Sopas'),
(78, 'Sopa Wantan', 'Caldo concentrado de pollo y verduras, viene con su huevo cocido y masa delgada wantan.', '8.000', 'uploads/2c6Zm3IqETDbQaPyJkIKP4RoqZ4cjQpbGowtavsP.jpg', 'Sopas'),
(79, 'Sustancia', 'Caldo de carne bien cocinado, fideos largos y verduras.', '7.000', 'uploads/XIFlfkRIMD0xbSekP7dJjtZMVkD7VmJds3ZOH4wE.jpg', 'Sopas'),
(80, 'Parihuela', 'Sopa de mariscos acompañado de arroz blanco.', '20.000', 'uploads/nFj4vi16VbHaGloiZMHhrfP1FT68mia7YnFbtuEi.jpg', 'Sopas'),
(81, 'Sopa de Mote', 'Sopa a base de maíz mote y carne cocinado a fuego lento.', '7.000', 'uploads/XB37T9spdwyP4jYD67dn8d0QgN6Y0PGNWG5u7q3r.jpg', 'Sopas'),
(82, 'Sopa a la Minuta', 'Sopa a base de leche, contiene carne, huevo y orégano.', '8.000', 'uploads/bFzciK3V4sjMiYMMy4V9dtc0GLTlLbM5dw696Y3D.jpg', 'Sopas'),
(84, 'Arroz con Pollo', 'Arroz con pollo verde, con choclo, arvejas, morrón y zanahoria en cuadradios.', '8.000', 'uploads/2NThZg1mFgDvEvOA8NyqWhEbt3f6SoNApXd7rc8u.jpg', 'Criolla'),
(85, 'Pachamanca', 'Carne, papa, camote, choclo y mandioca adresado con huacatay compañado de arroz.', '10.000', 'uploads/z1MISlMjHgZ7r8HHKb0ZOUlRjIy1gm3w9mWFvr3n.jpg', 'Criolla'),
(86, 'Seco con Pato', 'Pato aderezado con salsa, ensalada criolla compañado con arroz', '3500', 'uploads/UAAoOCR6sM2VXHtPg7Uyzf5ApNdDD0itFkMSOd4x.jpg', 'Criolla'),
(87, 'Lomo Saltado', 'Trozos de carne, cebolla y tomate salteados, con papas fritas y arroz.', '8.000', 'uploads/cCdf9XQbXrf7O5uaSBGF9DOvkkMLwVGM6gqgWS2E.jpg', 'Criolla'),
(88, 'Seco con Frejoles', 'Carne rebosada con cilantro acompañada con frejoles y arroz blanco.', '9.000', 'uploads/yaRZzE1Vyr9BdLYlPoGzEdRNO6vsfocBkt8vMRJl.jpg', 'Criolla'),
(89, 'Tallarin Criollo', 'Salteado de Carne, fideos, cebolla y tomate.', '8.000', 'uploads/wZ6YbPsgAL9IqwkVvV0fT6ok6kERQNZXy21UkD5V.jpg', 'Criolla'),
(90, 'Inka Kola 2.5L', NULL, '9.000', 'uploads/yBxK8NFDkBCGo6ztnu2MvS8kKEJKTwibfWUUBNmC.jpg', 'Bebidas'),
(91, 'Chola de Oro 2.25L', NULL, '5.000', 'uploads/g2fhslqN5L2jzwL4eJTwevbi3izPnu0XQLIzge2C.jpg', 'Bebidas'),
(92, 'Mancora 2.25L', NULL, '900', 'uploads/0tp8FRPPP4FIsBGzRWnXDzZx8sVXfmkIbzCPphfA.jpg', 'Bebidas'),
(93, 'Mancora Roja 2.25L', NULL, '900', 'uploads/rpLreTOoQgctZDDabRA4TWiYZLxvRki16GGRXtLT.jpg', 'Bebidas'),
(94, 'Coca Cola 2.25L', NULL, '5.000', 'uploads/ZN6QnHSF0kbN3QGNACI796vRH7v8msy4uIGF2OZJ.jpg', 'Bebidas'),
(95, 'Coca Cola 1.5L', NULL, '4.000', 'uploads/es3kGgq64kUlntRqNNcmrK65diHemYyureY0L6xV.jpg', 'Bebidas'),
(96, 'Coca Cola de Vidrio', NULL, '3.500', 'uploads/TbdcyXlAcPcdLqTITlhFAgQBp5PTELzubBTANm9U.jpg', 'Bebidas'),
(97, 'Sprite 2.25L', NULL, '5.000', 'uploads/mniGkIqr8E9BtQtu0oGfmukvvzBIh5jhsEh8FeAt.jpg', 'Bebidas'),
(98, 'Sprite 1.5L', NULL, '4.000', 'uploads/YSusSOa8v9V1nKwf4GBLEsiLu4RZJ4YorSQkkg7l.jpg', 'Bebidas'),
(99, 'Pepsi Pequeña', NULL, '600', 'uploads/Z5235MW7acTMnt1h8nmdlUS0EFfkbgywCxqPjFZA.jpg', 'Bebidas'),
(100, '7UP Pequeña', NULL, '250', 'uploads/YwOZI8VXxSlRfY4LamMe7kbnlpZ6VWmm4bbpXcfT.jpg', 'Bebidas'),
(101, 'Fanta 2.25L', NULL, '1500', 'uploads/bgsH8VsL47Dc20p5WHBoJzj7tqeMO7q3EswzJp7n.jpg', 'Bebidas'),
(102, 'Fanta Pequeña', NULL, '250', 'uploads/lcoDM8vF8xoSBy6wJiKxXZKW718DrwGfKTN3JwKC.jpg', 'Bebidas'),
(103, 'Pepsi en Lata', NULL, '120', 'uploads/HTrPSkW9xXbB7R7EV85ELEgHuiFHFoVW59Eenewh.jpg', 'Bebidas'),
(104, 'Agua 2.25L', NULL, '300', 'uploads/w8z1Hmni7I7KHYJUkExV3dQkqJGnJqIcxcuEFLNZ.jpg', 'Bebidas'),
(105, 'Levite Pequeña Manzana', NULL, '200', 'uploads/WLywZ3ZNKgXHoOPeaDHeZRSuMbHA0b1iHPRcaAZA.jpg', 'Bebidas'),
(106, 'Levite Pequeña Pomelo', NULL, '200', 'uploads/fVI26hrvwsjzVMjocHTTVBfXkguNUGFzudyY30q9.jpg', 'Bebidas'),
(107, 'Baggio Fresh Naranja', NULL, '400', 'uploads/JeGlMTsk18Z2opCfB84bBXpE4GR9WiErUHffVBtG.jpg', 'Bebidas'),
(108, 'Baggio Fresh Pomelo', NULL, '400', 'uploads/FVUjEWntP6qvthplAAVVhwy92nbXYslv0MzeKbsZ.jpg', 'Bebidas'),
(109, 'Licuado de Ananá 2L', NULL, '1500', 'uploads/UHeoAoMiTv1rkuFue0G64elTXpsdVYOM8RtFc7ss.jpg', 'Bebidas'),
(110, 'Licuado de Maracuyá 2L', NULL, '2500', 'uploads/IMPSzYkG5wnvkF7FF5LwDKAUWpa7pJuZMHRgl4U5.jpg', 'Bebidas'),
(111, 'Licuado de Frutilla 2L', NULL, '1500', 'uploads/vIlxeOS6d583vn1Tz2CCotrdsejHKZp1AhyilUtM.jpg', 'Bebidas'),
(112, 'Brahma', NULL, '1800', 'uploads/Wz24UZJuiNZkon3pQXhsTMF4AqjJuwXZyAlyMbty.jpg', 'Cervezas'),
(113, 'Brahma en Lata', NULL, '800', 'uploads/hEjXCj70kJ5ACofUDSvWgTSz1Uo7YeyMPe0gD4a4.jpg', 'Cervezas'),
(114, 'Corona', NULL, '2000', 'uploads/uTztyU9MLJLNbv9JzGlMuglp3KslaX7kv4N7f0YX.jpg', 'Cervezas'),
(116, 'Stella', NULL, '2000', 'uploads/Yw7NY1PHwOJydniZxPKrVTCws6sHww8DhcKLHyW1.jpg', 'Cervezas'),
(117, 'Ananá Fizz', NULL, '300', 'uploads/79ixWyUWKmTzBJvMa3Y1mLZ4wkzpROYhyaikJC5e.jpg', 'Bebidas'),
(118, 'Frizze', NULL, '500', 'uploads/QkcVNgsUISDaQXRtkEZaWYqF7Ag2FPrzeTIDjkvU.jpg', 'Bebidas'),
(119, 'Dr Lemon XL', NULL, '500', 'uploads/9LBz1mCOu8BSbqZOLOZ0WnGr2UqbJHaMfvgfs98b.jpg', 'Bebidas'),
(120, 'Vino Alma Mora', NULL, '2500', 'uploads/OCQKqpvUxV0jmyEdteBVQT3fbiU8WDASXVJFpfwO.jpg', 'Vinos'),
(121, 'Vino Benegas', NULL, '2500', 'uploads/Q56XHe331OzxHvsXyVjlrMN0bGHXPmhKhpU1thtc.jpg', 'Vinos'),
(122, 'Vino Cabernet', NULL, '2500', 'uploads/NdxEzP0HnID7cZZ7Pu1GWFaNJgVWTT4arfbTpP3y.jpg', 'Vinos'),
(123, 'Vino Chenin', NULL, '2500', 'uploads/skREiw3kU8xE8u6ZLcWug9gSyJmn5ZdDI1fsR9v8.jpg', 'Vinos'),
(124, 'Vino Circus', NULL, '2500', 'uploads/N4UNWRuvKQGGdigj79kIsH7BY3T7LCCvmfdZzH7e.jpg', 'Vinos'),
(125, 'Vino Dada', NULL, '2500', 'uploads/Di5d7dLfEH76KWESm40jC5Bpxm2nRZ0ZWI1nOwS1.jpg', 'Vinos'),
(126, 'Vino Viejas Cepas', NULL, '2500', 'uploads/TtOEf9vnp8cHLPrJTq76Ch8AENYboCkGDjhp1TVY.jpg', 'Vinos'),
(153, 'Tigreee', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '', 'uploads/d3O4tJvmE6ePZGlyB7q9FKDo8I2ZvfQPsJkGgDj7.jpg', 'Entrada'),
(161, 'PIRULOaaaaaaaaaaaaaaaaaaa', 'PIRULO', '213', 'uploads/', 'Entrada'),
(163, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '2', 'uploads/d3O4tJvmE6ePZGlyB7q9FKDo8I2ZvfQPsJkGgDj7.jpg', 'Entrada'),
(174, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '', 'uploads/1730612555438.jpg', 'Entrada'),
(180, '', '', '', 'uploads/1730645299365.jpg', ''),
(181, '', '', '', 'uploads/1730645490676.jpg', ''),
(182, '', '', '', 'uploads/1730645592848.jpg', ''),
(183, '', '', '', 'uploads/1730645645838.jpg', ''),
(184, '', '', '', 'uploads/1730645794142.jpg', ''),
(185, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '23', 'uploads/1730645902564.jpg', 'Pollos'),
(186, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '213', 'uploads/1730645942476.png', 'Mariscos'),
(187, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '213', 'uploads/1730645955349.jpg', 'Entrada'),
(188, 'OMARRRR', '', '$$213', 'uploads/1730647771266.jpg', ''),
(189, '', '', '', 'uploads/1730646059235.jpg', ''),
(190, 'PIRULO', 'PIRULO', '10000', 'uploads/1730646282208.jpg', 'Entrada'),
(191, 'PIRULO', 'PIRULO', '10000', 'uploads/1730646283544.jpg', 'Entrada'),
(192, 'PIRULO', 'PIRULO', '10000', 'uploads/1730646284793.jpg', 'Entrada'),
(193, 'PIRULO', 'PIRULO', '10000', 'uploads/1730646302097.jpg', 'Entrada'),
(195, 'Leche de Tigree', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '213', 'uploads/1730647489206.png', 'Entrada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `celular` int(10) NOT NULL,
  `rol` varchar(30) NOT NULL,
  `localidad` varchar(30) NOT NULL,
  `imagen_usuario` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre`, `apellido`, `direccion`, `celular`, `rol`, `localidad`, `imagen_usuario`, `fecha_creacion`) VALUES
(365, 'mariano@mariano.com.ar', '$2a$08$ivrEpZONbcUFPAN5mFVMkO9LeR2EBvr8GCc2cc9nBlO3MUcwHuu2G', 'nombre', 'apellido', 'direccion', 1133224, 'Mozo', 'WILDE', '1730605692550.jpg', '2024-11-03 03:48:12'),
(371, 'mariano@mariano.com.ar', '$2a$08$win3heJ7NvE8jIXYfJxebeZ7/2Z6Y1UpNn2oMs9Q4jnva.vdBkSrC', 'nombreeeeeeee', 'apellido', 'direccion', 1133224, 'Mozo', 'WILDE', '1730607320674.jpg', '2024-11-03 04:15:20'),
(379, 'johndoe@example.com', '$2a$08$E5wPamix6dWE3/QsO..JOuzS00PHXEGuqR2NzH9ZXfMu2.3SWRmlK', '', '', '', 0, '', '', '1730673019109.png', '2024-11-03 16:24:26'),
(380, '', '$2a$08$2GXWa15V3BEnzCIPtKdfHugEiBai4rAfu/5SgJU4bVCb02L7274Um', '', '', '', 0, '', '', '', '2024-11-03 16:28:53'),
(381, '', '$2a$08$QhyHd0bEJogUKsMLHQ.wZu0z9UskngVGbSzb36r0X5j1fGpbSC6Fy', '', '', '', 0, '', '', '', '2024-11-03 16:34:06'),
(382, '', '$2a$08$3uOhrnCwUbtdT6kMfzA8POBIinvwSJcX34X6w301QPXeMKnqd/jjO', '', '', '', 0, '', '', '', '2024-11-03 22:30:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videoportadas`
--

CREATE TABLE `videoportadas` (
  `id` int(11) NOT NULL,
  `nombre_videoPortada` varchar(50) NOT NULL,
  `tipo_videoPortada` varchar(50) NOT NULL,
  `descripcion_videoPortada` varchar(255) NOT NULL,
  `file_videoPortada` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videoportadas`
--

INSERT INTO `videoportadas` (`id`, `nombre_videoPortada`, `tipo_videoPortada`, `descripcion_videoPortada`, `file_videoPortada`) VALUES
(1, '11223344', '1122334455', '1122334455', 'file.jpg'),
(2, '11223344', '1122334455', '1122334455', 'file.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videoportadas`
--
ALTER TABLE `videoportadas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `platillos`
--
ALTER TABLE `platillos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=383;

--
-- AUTO_INCREMENT de la tabla `videoportadas`
--
ALTER TABLE `videoportadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
