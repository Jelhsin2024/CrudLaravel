/* // CONFIGURAR LO QUE SERIA UN SERVIDOR CON LAS MINIMAS PRESTACIONES PARA CORRER EXPRESS
// Que este escuchando y tengamos una ruta principal "/" en el proyecto

const express = require("express");
const app = express();

app.use(express.json());
// en el cuerpo de la peticion viene un json, lo voy a transformar en un objeto JS y de esta manera
// lo voy a poder utilizar

const pedidosRouter = require('./routers/pedidos.router');
app.use('/pedidos', pedidosRouter);
// Siempre que me refiera a pedidos le coloco el prefijo

const platillosRouter = require('./routers/platillos.router');
app.use('/platillos', platillosRouter);
// Siempre que me refiera a platillos le coloco el prefijo


app.get("/", (req, res) => {
    res.send("RUTA DE INICIO MOTHER FUCKER");
});
// Esta es la ruta principal del proyecto "/"

const PORT = 3000;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
 */


// CONFIGURAR LO QUE SERIA UN SERVIDOR CON LAS MINIMAS PRESTACIONES PARA CORRER EXPRESS
// Que este escuchando y tengamos una ruta principal "/" en el proyecto

require("dotenv").config();

const express = require("express");
const cors = require("cors");  // Importa el paquete cors
const app = express();



app.use(cors());  // Aplica el middleware cors a todas las rutas

app.use(express.json());
// en el cuerpo de la peticion viene un json, lo voy a transformar en un objeto JS y de esta manera
// lo voy a poder utilizar

const pedidosRouter = require('./routers/pedidos.router');
app.use('/pedidos', pedidosRouter);
// Siempre que me refiera a pedidos le coloco el prefijo

const platillosRouter = require('./routers/platillos.router');
app.use('/platillos', platillosRouter);
// Siempre que me refiera a platillos le coloco el prefijo

const usersRouter = require('./routers/auth.router');
app.use('/users', platillosRouter);
// Siempre que me refiera a platillos le coloco el prefijo

app.get("/", (req, res) => {
    res.send("RUTA DE INICIO MOTHER FUCKER");
});
// Esta es la ruta principal del proyecto "/"


app.use("/auth", require("./routers/auth.router"));
//Ruta para loguin


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

