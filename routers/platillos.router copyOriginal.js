/// RUTAS DEL MODULO ///
const express = require("express");
const router = express.Router();

const controller = require("../controllers/platillos.controller");

//// METODO GET  /////
//envio variables desde el servidor al front
router.get('/user-info', (req, res) => {
    const datosUsuario = {
        nombre: "Omaree",
        rol: "Administrador"
    };
    res.json(datosUsuario);
});

// Para todos los productos
router.get('/', controller.allPlatillo);

// Para un producto
router.get('/:id_platillo', controller.showPlatillo);

//// METODO POST  ////
router.post('/', controller.storePlatillo);

//// METODO PUT  ////
router.put('/:id_platillo', controller.updatePlatillo);

//// METODO DELETE ////
router.delete('/:id_platillo', controller.destroyPlatillo);

// EXPORTAR ROUTERS
module.exports = router;

