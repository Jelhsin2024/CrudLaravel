/// RUTAS DEL MODULO ///
const express = require("express");
const router = express.Router();

const controller = require("../controllers/peliculas.controller");

//// METODO GET  /////

// Para todos los productos
router.get('/', controller.allMovie);

// Para un producto
router.get('/:id_pelicula', controller.showMovie);

//// METODO POST  ////
router.post('/', controller.storeMovie);

//// METODO PUT  ////
router.put('/:id_pelicula', controller.updateMovie);

//// METODO DELETE ////
router.delete('/:id_pelicula', controller.destroyMovie);

// EXPORTAR ROUTERS
module.exports = router;

