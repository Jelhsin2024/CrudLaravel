/// CONTROLADORES DEL MODULO ///

// Campos de la tabla videoportadas
// id
// nombre_videoPortada
// tipo_videoPortada
// descripcion_videoPortada
// file_videoPortada


const db = require("../db/db");

//// METODO GET  /////

// Para todos los videoportadas
const allVideoPortada = (req, res) => {
    const sql = "SELECT * FROM videoportadas";
    db.query(sql, (error, rows) => {
        if(error){
            return res.status(500).json({error : "ERROR: Intente más tarde por favor, no se pueden mostrar los videos de portada"});
        }
        res.json(rows);
    }); 
};

// Para un Pedido
const showVideoPortada = (req, res) => {
    const {id_videoportada} = req.params;
    const sql = "SELECT * FROM videoportadas WHERE id = ?";
    db.query(sql,[id_videoportada], (error, rows) => {
        console.log(rows);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(rows.length == 0){
            return res.status(404).send({error : "ERROR: No existe el video de portada buscado"});
        };
        res.json(rows[0]); 
        // me muestra el elemento en la posicion cero si existe.
    }); 
};

//// METODO POST  ////
const storeVideoPortada = (req, res) => {
    const {nombre_videoPortada, tipo_videoPortada, descripcion_videoPortada, file_videoPortada} = req.body;
    const sql = "INSERT INTO videoportadas (nombre_videoPortada, tipo_videoPortada, descripcion_videoPortada, file_videoPortada) VALUES (?,?,?,?)";
    db.query(sql,[nombre_videoPortada, tipo_videoPortada, descripcion_videoPortada, file_videoPortada], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor no se puede registrar el video portada"});
        }
        const videoPortada = {...req.body, id: result.insertId}; // ... reconstruir el objeto del body
        res.status(201).json(videoPortada); // muestra creado con exito el elemento
    });     

};

//// METODO PUT  ////
const updateVideoPortada = (req, res) => {
    const {id_videoportada} = req.params;
    const {nombre_videoPortada, tipo_videoPortada, descripcion_videoPortada, file_videoPortada} = req.body;
    
    const sql ="UPDATE videoportadas SET nombre_videoPortada = ?, tipo_videoPortada = ?, descripcion_videoPortada = ?, file_videoPortada = ? WHERE id = ?";
    db.query(sql,[nombre_videoPortada, tipo_videoPortada, descripcion_videoPortada, file_videoPortada, id_videoportada], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: El video portada a modificar no existeeeeeeeeeeee"});
        };
        
        const videoportada = {...req.body, ...req.params}; // ... reconstruir el objeto del body

        res.json(videoportada); // mostrar el elmento que existe
    });     
};


//// METODO DELETE ////
const destroyVideoPortada = (req, res) => {
    const {id_videoportada} = req.params;
    const sql = "DELETE FROM videoportadas WHERE id = ?";
    db.query(sql,[id_videoportada], (error, result) => {
        console.log(result);
        if(error){
            return res.status(500).json({error : "ERROR: Intente mas tarde por favor"});
        }
        if(result.affectedRows == 0){
            return res.status(404).send({error : "ERROR: El video portada a borrar no existe"});
        };
        res.json({mesaje : "El video de la portada fue Eliminado"});
    }); 
};


// EXPORTAR DEL MODULO TODAS LAS FUNCIONES
module.exports = {
    allVideoPortada,
    showVideoPortada,
    storeVideoPortada,
    updateVideoPortada,
    destroyVideoPortada
};
