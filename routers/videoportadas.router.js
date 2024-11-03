/// RUTAS DEL MODULO ///
const express = require("express");
const router = express.Router();

const controller = require("../controllers/videoPortadas.controller");



// Para todos los productos
router.get('/', controller.allVideoPortada);

// Para un producto
router.get('/:id_videoportada', controller.showVideoPortada);

//// METODO POST  ////
router.post('/', controller.storeVideoPortada);

//// METODO PUT  ////
router.put('/:id_videoportada', controller.updateVideoPortada);

//// METODO DELETE ////
router.delete('/:id_videoportada', controller.destroyVideoPortada);

// EXPORTAR ROUTERS
module.exports = router;

