/// CONTROLADORES DEL MODULO Comentario///

// Campos de la tabla platillos
// id
// nombre 
// puntuacion
// comentario


const db = require("../db/db");

//// METODO GET  /////

// Meotodo para  mostrar todos los comentarios
const allComentario = (req, res) => {
    const sql = "SELECT * FROM comentarios";
    db.query(sql, (error, rows) => {
        if(error){
            return res.status(500).json({error : "ERROR: Intente más tarde por favor, no se pueden mostrar los comentarios"});
        }
        res.json(rows);
    }); 
};

// Meotodo para  mostrar un comentario
const showComentario = (req, res) => {
    const {id_comentario} = req.params;
    const sql = "SELECT * FROM platillos WHERE id = ?";
    db.query(sql,[id_comentario], (error, rows) => {
        console.log(rows);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(rows.length == 0){
            return res.status(404).send({error : "ERROR: No existe el pedido buscado"});
        };
        res.json(rows[0]); 
        // me muestra el elemento en la posicion cero si existe.
    }); 
};

//// METODO POST  ////
const storeComentario = (req, res) => {
    const {nombre, puntuacion, comentario} = req.body;
    const sql = "INSERT INTO comentarios (nombre, puntuacion, comentario) VALUES (?,?,?)";
    db.query(sql,[nombre, puntuacion, comentario], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor no se puede cargar el comentario :("});
        }
        const comentario = {...req.body, id: result.insertId}; // ... reconstruir el objeto del body
        res.status(201).json(comentario); // muestra creado con exito el elemento
    });     

};

//// METODO PUT  ////
const updateComentario = (req, res) => {
    const {id_comentario} = req.params;
    const {nombre, puntuacion, comentario} = req.body;
    
    const sql ="UPDATE comentarios SET nombre = ?, puntuacion = ?, comentario = ? WHERE id = ?";
    db.query(sql,[nombre, puntuacion, comentario, id_comentario], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: El comentario a modificar no existe"});
        };
        
        const comentario = {...req.body, ...req.params}; // ... reconstruir el objeto del body

        res.json(comentario); // mostrar el elmento que existe
    });     
};


//// METODO DELETE ////
const destroyComentario = (req, res) => {
    const {id_comentario} = req.params;
    const sql = "DELETE FROM comentarios WHERE id = ?";
    db.query(sql,[id_comentario], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: El comentario a borrar no existe"});
        };
        res.json({mesaje : "Comentario Eliminado bien piola"});
    }); 
};


// EXPORTAR DEL MODULO TODAS LAS FUNCIONES
module.exports = {
    allComentario,
    showComentario,
    storeComentario,
    updateComentario,
    destroyComentario
};
