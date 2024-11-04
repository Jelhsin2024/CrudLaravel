require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");

// Middleware para manejar cookies
app.use(cookieParser());

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON en solicitudes
app.use(express.json());

// Seteamos la carpeta liosanJavascript
// Rutas API
// Ruta para Pedidos
const pedidosRouter = require('./routers/pedidos.router');
app.use('/api/pedidos', pedidosRouter);

// Ruta para Platillos
const platillosRouter = require('./routers/platillos.router');
app.use('/api/platillos', platillosRouter);

// Ruta para Contactos
const contactosRouter = require('./routers/contactos.router');
app.use('/api/contactos', contactosRouter);

// Ruta para edicion de videos de portada
const videosPortadaRouter = require('./routers/videoPortadas.router');
app.use('/api/videoportadas', videosPortadaRouter);

// Ruta para administracion de comentarios
const comentariosRouter = require('./routers/comentarios.router');
app.use('/api/comentarios', comentariosRouter);

// Ruta para inicio de sesion
const usuarioRouter = require("./routers/auth.router")
app.use("/api/auth", usuarioRouter);




/* const __dirname = path.dirname(file) */


//RUTAS ESTATICAS:
// Middleware para servir archivos estáticos en el servidor multi plataforma con el path.join(HTML, CSS, JS, imágenes, etc.)
app.use('/', express.static(path.join(__dirname, 'liosanJavascript/')));

// Ruta estática para servir archivos en la carpeta pages
app.use('/pages', express.static(path.join(__dirname, 'liosanJavascript/pages')));

// Ruta estática para servir archivos en la carpeta pages
app.use('/admin', express.static(path.join(__dirname, 'liosanJavascript/pages/admin')));

/* app.use('/uploads', express.static(path.join(__dirname, 'liosanJavascript/public/uploads'))); */

// Ruta estática para servir archivos en la carpeta pages
app.use('/plato', express.static(path.join(__dirname, 'liosanJavascript/pages/plato')));

// Ruta principal "/" que servirá tu archivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/indexEntrada.html"));
});
//RUTAS ESTATICAS FIN


//Rutas de administracion en desarrollo
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/login.html"));
});

//RU
app.get("/admin/platillos", (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/platillos.html"));
});

app.get("/admin/pedidos", (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/pedidos.html"));
});
app.get("/admin/platillos", (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/platillos.html"));
});
app.get("/admin/platillos", (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/platillos.html"));
});

//Rutas de administracion en desarrollo FIIIN

// Configura el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));

/* console.log((__dirname + '/liosanJavascript/')) */