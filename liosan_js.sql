-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2024 a las 02:10:51
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

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
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(255) NOT NULL,
  `n_mesa` int(255) NOT NULL,
  `n_platillo` varchar(255) NOT NULL,
  `fecha_hora` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `n_mesa`, `n_platillo`, `fecha_hora`) VALUES
(1, 2, 'NUEVO PLATILLO 1', '2024-10-09'),
(2, 22, 'Nuevo Platillo 22', '2024-10-09'),
(3, 1, 'Nuevo Platillo', '2024-10-09'),
(4, 12, 'Nuevo Platillo 12', '2024-10-09');

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
(46, 'Leche de Tigre', 'Pescado crudo bien marinado con cítricos, ajíes y cebollas.', '12.000', 'uploads/d3O4tJvmE6ePZGlyB7q9FKDo8I2ZvfQPsJkGgDj7.jpg', 'Entrada'),
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
(76, 'Taipá a la Plancha', 'Mix de carnes y verduras a la plancha.', '25.000', '            <img class=\"img-thumbnail img-fluid\" src=\"uploads/yj8VP3oFLwfKB9khsES6aQSufYcvBjgQmwlhSXgq.mp4\" alt=\"\" width=\"150px\">            ', 'Chifa Video'),
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
(126, 'Vino Viejas Cepas', NULL, '2500', 'uploads/TtOEf9vnp8cHLPrJTq76Ch8AENYboCkGDjhp1TVY.jpg', 'Vinos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `platillos`
--
ALTER TABLE `platillos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
