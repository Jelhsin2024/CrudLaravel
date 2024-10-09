/// CONTROLADORES DEL MODULO ///

// Campos de la tabla peliculas
// id_pelicula
// titulo
// fecha_estreno
// director

const db = require("../db/db");

//// METODO GET  /////

// Para todos las peliculas
const allMovie = (req, res) => {
    const sql = "SELECT * FROM peliculas";
    db.query(sql, (error, rows) => {
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        res.json(rows);
    }); 
};

// Para una pelicula
const showMovie = (req, res) => {
    const {id_pelicula} = req.params;
    const sql = "SELECT * FROM peliculas WHERE id_pelicula = ?";
    db.query(sql,[id_pelicula], (error, rows) => {
        console.log(rows);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(rows.length == 0){
            return res.status(404).send({error : "ERROR: No existe la pelicula buscada"});
        };
        res.json(rows[0]); 
        // me muestra el elemento en la posicion cero si existe.
    }); 
};

//// METODO POST  ////
const storeMovie = (req, res) => {
    const {titulo, fecha_estreno, director} = req.body;
    const sql = "INSERT INTO peliculas (titulo, fecha_estreno, director) VALUES (?,?,?)";
    db.query(sql,[titulo, fecha_estreno, director], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        const pelicula = {...req.body, id: result.insertId}; // ... reconstruir el objeto del body
        res.status(201).json(pelicula); // muestra creado con exito el elemento
    });     

};

//// METODO PUT  ////
const updateMovie = (req, res) => {
    const {id_pelicula} = req.params;
    const {titulo, fecha_estreno, director} = req.body;
    const sql ="UPDATE peliculas SET titulo = ?, fecha_estreno = ?, director = ? WHERE id_pelicula = ?";
    db.query(sql,[titulo, fecha_estreno, director, id_pelicula], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: La pelicula a modificar no existe"});
        };
        
        const pelicula = {...req.body, ...req.params}; // ... reconstruir el objeto del body

        res.json(pelicula); // mostrar el elmento que existe
    });     
};


//// METODO DELETE ////
const destroyMovie = (req, res) => {
    const {id_pelicula} = req.params;
    const sql = "DELETE FROM peliculas WHERE id_pelicula = ?";
    db.query(sql,[id_pelicula], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: La pelicula a borrar no existe"});
        };
        res.json({mesaje : "Pelicula Eliminada"});
    }); 
};


// EXPORTAR DEL MODULO TODAS LAS FUNCIONES
module.exports = {
    allMovie,
    showMovie,
    storeMovie,
    updateMovie,
    destroyMovie
};
