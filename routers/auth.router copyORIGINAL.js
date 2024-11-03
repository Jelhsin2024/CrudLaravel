/// RUTAS DEL MODULO ///
const express = require("express");
const router = express.Router();
//// AUTH ////
const controller = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")
//// METODO POST  ////
router.post('/register', controller.register);

router.post('/login', controller.login);
router.get("/protected", authMiddleware, (req, res) => {
    res.status(200).send(`Hola Usuario ${req.userId}`);
});

// Para todos los productos
router.get('/', controller.allUsuario);

// Para un producto
router.get('/:id_usuario', controller.showUsuario);

//// METODO POST  ////
router.post('/', controller.storeUsuario);

//// METODO PUT  ////
router.put('/:id_usuario', controller.updateUsuario);

//// METODO DELETE ////
router.delete('/:id_usuario', controller.destroyUsuario);


// EXPORTAR ROUTERS
module.exports = router;
