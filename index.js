require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
//importamos midilleware
const { soloAdmin, soloPublico } = require("./middleware/admin.middleware");
/* console.log("Tipo de soloAdmin:", typeof soloAdmin); // Debería mostrar "function"
console.log("Tipo de soloPublico:", typeof soloPublico); // Debería mostrar "function" */



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


//RUTAS ESTATICAS para que los levante el servidor:
// Middleware para servir archivos estáticos en el servidor multi plataforma con el path.join(HTML, CSS, JS, imágenes, etc.)
app.use('/', express.static(path.join(__dirname, 'liosanJavascript/')));

// Ruta estática para servir archivos en la carpeta pages
app.use('/pages', express.static(path.join(__dirname, 'liosanJavascript/pages')));

// Ruta estática para servir archivos en la carpeta admin
/* app.use('/admin', express.static(path.join(__dirname, 'liosanJavascript/pages/admin'))); */

/* app.use('/uploads', express.static(path.join(__dirname, 'liosanJavascript/public/uploads'))); */

// Ruta estática para servir archivos en la carpeta pages
app.use('/plato', express.static(path.join(__dirname, 'liosanJavascript/pages/plato')));

// Ruta principal "/" que servirá tu archivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/indexEntrada.html"));
});
//RUTAS ESTATICAS FIN


//Rutas estaticas de administracion en desarrollo
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/admin/login.html"));
});



app.get("/admin/platillos", soloAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/platillos.html"));
});

app.get("/admin/pedidos", soloAdmin,(req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/pedidosfinal.html"));
});

app.get("/admin/registeradmin", soloAdmin,(req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/registerAdmin.html"));
});
app.get("/admin/videosportada", soloAdmin,(req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/videosPortada.html"));
});
app.get("/admin/contacto", soloAdmin,(req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/contactoAdmin.html"));
});
app.get("/admin/comentarios", soloAdmin,(req, res) => {
    res.sendFile(path.join(__dirname, "liosanJavascript/pages/admin/comentariosAdmin.html"));
});


//Rutas de administracion en desarrollo FIIIN

//Rutas estaticas de administracion en desarrollo
app.get("/plato/pollos", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/pollos.html"));
});


app.get("/plato/mariscos", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/mariscos.html"));
});
app.get("/plato/chifa", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/chifa.html"));
});
app.get("/plato/sopas", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/sopas.html"));
});
app.get("/plato/criolla", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/criolla.html"));
});
app.get("/plato/saborisadas", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/bebidas.html"));
});
app.get("/plato/cervezas", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/cervezas.html"));
});
app.get("/plato/vinos", (req, res) => {
    res.sendFile(path.join(__dirname, "/liosanJavascript/pages/plato/vinos.html"));
});



//Rutas de administracion en desarrollo FIIIN

// Configura el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));

/* console.log((__dirname + '/liosanJavascript/'+"RUTA DIRNAME Y")) */