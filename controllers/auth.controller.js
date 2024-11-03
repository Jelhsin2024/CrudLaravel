/// CONTROLADORES DEL MODULO ///

// Campos de la tabla platillos
// id
// nombre
// apellido
// email
// password
// direccion
// localidad
// celular
// rol
// imagen_usuario

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.models");
require("dotenv").config();

const express = require("express");

const app = express();

///MODULOS EXTRA PARA LOGUIN///
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Seteamos urlencoded para capturar los datos del formulario

/* app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public')); 
//Seteamos urlencoded para referenciar archivos
app.set('view engine', 'ejs'); */
//Motor de plantillas de prueba

/* const session = require('express-session');
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized:true
})); */
// usamos sesiones para guardar el loguin de inicio de sesion

///FIN  MODULOS EXTRA PARA LOGUIN///

const db = require("../db/db");

//REGISTER ORIGINAL 
/* const register = async (req, res) => {
        const {nombre, apellido, email, password, direccion, localidad, celular, rol} = req.body;
        const hashPassword = await bcrypt.hash(password,8)

        const sql = "INSERT INTO usuarios (nombre, apellido, email, password, direccion, localidad, celular, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rol], (error, result) => {
            if (error) {
                return res.status(500).json({error: "ERROR: Intente más tarde por favor"});
            }
            // Incluye el hash de la contraseña en la respuesta para que se pueda ver
            const usuario = {...req.body, id: result.insertId, hashPassword};
            res.status(201).json(usuario);

        });
    
}; */

// Register con imagen de usuario(Implementacion prueba)
const register = async (req, res) => {
    let imagenAsubir ="";
    if(req.file){imagenAsubir=req.file.filename;}
/*     let rutaimagenAsubir="uploads/"+imagenAsubir; */
        
    /* console.log(rutaimagenAsubir) */
    const {nombre, apellido, email, password, direccion, localidad, celular, rol} = req.body;
    const hashPassword = await bcrypt.hash(password,8)

    const sql = "INSERT INTO usuarios (nombre, apellido, email, password, direccion, localidad, celular, rol, imagen_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rol, imagenAsubir], (error, result) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor"});
        }
        // Incluye el hash de la contraseña en la respuesta para que se pueda ver
        const usuario = {...req.body, id: result.insertId,imagenAsubir, hashPassword};
        res.status(201).json(usuario);
    });

};

const updateUsuario = async (req, res) => {
    let imagenAsubir ="";
    if(req.file){imagenAsubir=req.file.filename;}
    /* let rutaimagenAsubir="uploads/"+imagenAsubir; */

    const {id_usuario} = req.params;
    const {nombre, apellido, email, password, direccion, localidad, celular, rol} = req.body;
    const hashPassword = await bcrypt.hash(password,8)

    const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ?, direccion = ?, localidad = ?, celular = ?, rol = ?, imagen_usuario = ? WHERE id = ?";
    db.query(sql, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rol, imagenAsubir, id_usuario], (error, result) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor servidor murio"});
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({error: "ERROR: El usuario a modificar no existe"});
        }
        const usuario = {...req.body,imagenAsubir, id_usuario};
        res.json(usuario); // mostrar el elemento que existe
    });
};


const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const sql = "SELECT * FROM usuarios WHERE email = ?";
        db.query(sql, [email], async (error, result) => {
            if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
                console.log(' USUARIO o CONTRASEÑA INCORRECTAS');
                return res.status(401).json({ message: ' USUARIO o CONTRASEÑA INCORRECTAS'});
            } else {
                const token = jwt.sign({ userId: result[0].id }, process.env.SECRET_KEY, { expiresIn: "1h" });
                res.json({ message: 'Inicio de sesión exitoso', token });

                
            }
        });
    } else {
        res.status(400).send('Email y contraseña son obligatorios');
    }
};


/* const login = async (req, res) => {
    const {email, password} = req.body;
    let hashPassword = await bcrypt.hash(password,8)
    if(email && pass){
        const sql = "SELECT * FROM users WHERE user = ?";
        db.query(sql,[email], async( error, result)=>{
            if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                console.log(' USUARIO o CONTRASEÑA INCORRECTAS')
                res.send(' USUARIO o CONTRASEÑA INCORRECTAS');
            }
            else{
                console.log('Loguin BIEN PIOLLA WACHOOOOOOOOOOOOO')
                res.send('Loguin BIEN PIOLLA WACHOOOOOOOOOOOOO')
                
            }
        })
    }


};  */

const allUsuario = (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor, no se pueden mostrar los usuarios"});
        }
        res.json(rows);
    }); 
};

const showUsuario = (req, res) => {
    const {id_usuario} = req.params;
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    db.query(sql, [id_usuario], (error, rows) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor"});
        }
        if (rows.length === 0) {
            return res.status(404).send({error: "ERROR: No existe el usuario buscado"});
        }
        res.json(rows[0]); // me muestra el elemento en la posición cero si existe.
    });
};

/* const storeUsuario = async (req, res) => {
    const {nombre, apellido, email, password, direccion, localidad, celular, rol} = req.body;
    const hashPassword = await bcrypt.hash(password,8)

    const sql = "INSERT INTO usuarios (nombre, apellido, email, password, direccion, localidad, celular, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rol], (error, result) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor"});
        }
        const usuario = {...req.body, id: result.insertId};
        res.status(201).json(usuario);
    });
}; */



const destroyUsuario = (req, res) => {
    const {id_usuario} = req.params;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    db.query(sql, [id_usuario], (error, result) => {
        if (error) {
            return res.status(500).json({error: "ERROR: Intente más tarde por favor"});
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({error: "ERROR: El usuario a borrar no existe"});
        }
        res.json({mensaje: "Usuario eliminado"});
    });
};

module.exports = {
    register,
    login,
    allUsuario,
    showUsuario,
    /* storeUsuario, */
    updateUsuario,
    destroyUsuario
};
