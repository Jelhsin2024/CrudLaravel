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
const db = require("../db/db");

///MODULOS EXTRA PARA LOGUIN///
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Seteamos urlencoded para capturar los datos del formulario

// Register con imagen de usuario(Implementacion prueba)
const register = async (req, res) => {
    let imagenAsubir = "";
    if (req.file) {
        imagenAsubir = req.file.filename;
    }

    const { nombre, apellido, email, password, direccion, localidad, celular, rol } = req.body;
    const rolFinal = rol || "Cliente";

    try {
        // Verificar si el correo ya existe en la base de datos
        const sqlCheckEmail = "SELECT * FROM usuarios WHERE email = ?";
        db.query(sqlCheckEmail, [email], async (error, result) => {
            if (error) {
                return res.status(500).json({ error: "ERROR: Intente más tarde por favor" });
            }

            if (result.length > 0) {
                // Si ya existe un usuario con el correo, devolvemos un error
                return res.status(409).json({ error: "ERROR: Ya existe un usuario con este correo" });
            }

            // Si no existe, continuamos con el registro
            const hashPassword = await bcrypt.hash(password, 8);
            const sqlInsert = "INSERT INTO usuarios (nombre, apellido, email, password, direccion, localidad, celular, rol, imagen_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            db.query(sqlInsert, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rolFinal, imagenAsubir], (insertError, insertResult) => {
                if (insertError) {
                    return res.status(500).json({ error: "ERROR: Intente más tarde por favor" });
                }

                // Incluye los datos en la respuesta
                const usuario = { ...req.body, id: insertResult.insertId, imagen_usuario: imagenAsubir, rol: rolFinal };
                res.status(201).json(usuario);
            });
        });
    } catch (err) {
        res.status(500).json({ error: "ERROR: Hubo un problema con el servidor" });
    }
};


/* const updateUsuario = async (req, res) => {
    let imagenAsubir ="";
    if(req.file){imagenAsubir=req.file.filename;}
    

    const {id_usuario} = req.params;
    const {nombre, apellido, email, password, direccion, localidad, celular, rol} = req.body;
    const hashPassword = await bcrypt.hash(password,8)
    if(imagenAsubir){
        console.log("Mostramos que hay en imagnesubir:",imagenAsubir," mostramos que hau en password:",password)
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
    }

     else if(imagenAsubir=="" && password){
        const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ?, direccion = ?, localidad = ?, celular = ?, rol = ? WHERE id = ?";
        db.query(sql, [nombre, apellido, email, hashPassword, direccion, localidad, celular, rol, id_usuario], (error, result) => {
            if (error) {
                return res.status(500).json({error: "ERROR: Intente más tarde por favor servidor murio"});
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({error: "ERROR: El usuario a modificar no existe"});
            }
            const usuario = {...req.body,imagenAsubir, id_usuario};
            res.json(usuario); // mostrar el elemento que existe
        });
    
    }

    else if(imagenAsubir=="" && password==""){
        const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, direccion = ?, localidad = ?, celular = ?, rol = ? WHERE id = ?";
        db.query(sql, [nombre, apellido, email, direccion, localidad, celular, rol, id_usuario], (error, result) => {
            if (error) {
                return res.status(500).json({error: "ERROR: Intente más tarde por favor servidor murio"});
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({error: "ERROR: El usuario a modificar no existe"});
            }
            const usuario = {...req.body,imagenAsubir, id_usuario};
            res.json(usuario); // mostrar el elemento que existe
        });
    
    }

    else if(imagenAsubir && password==""){
        const sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, direccion = ?, localidad = ?, celular = ?, rol = ? WHERE id = ?";
        db.query(sql, [nombre, apellido, email, direccion, localidad, celular, rol, imagenAsubir, id_usuario], (error, result) => {
            if (error) {
                return res.status(500).json({error: "ERROR: Intente más tarde por favor servidor murio"});
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({error: "ERROR: El usuario a modificar no existe"});
            }
            const usuario = {...req.body,imagenAsubir, id_usuario};
            res.json(usuario); // mostrar el elemento que existe
        });
    
    } 

} */

    const updateUsuario = async (req, res) => {
        let imagenAsubir = req.file ? req.file.filename : ""; // Asigna el nombre de la imagen si existe
        const { id_usuario } = req.params;
        const { nombre, apellido, email, password, direccion, localidad, celular, rol } = req.body;
    
        // Preparar los datos para la consulta
        let sql = "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, ";
        let params = [nombre, apellido, email];
        
        // Agregar `password` si está presente
        if (password) {
            const hashPassword = await bcrypt.hash(password, 8);
            sql += "password = ?, ";
            params.push(hashPassword);
        }
    
        // Agregar `imagen_usuario` solo si hay una nueva imagen
        if (imagenAsubir) {
            sql += "imagen_usuario = ?, ";
            params.push(imagenAsubir);
        }
    
        // Continuar con el resto de los campos
        sql += "direccion = ?, localidad = ?, celular = ?, rol = ? WHERE id = ?";
        params.push(direccion, localidad, celular, rol, id_usuario);
    
        // Ejecutar la consulta
        db.query(sql, params, (error, result) => {
            if (error) {
                return res.status(500).json({ error: "ERROR: Intente más tarde por favor" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "ERROR: El usuario a modificar no existe" });
            }
    
            // Devolver los datos actualizados
            const usuario = { ...req.body, imagen_usuario: imagenAsubir || undefined, id_usuario };
            res.json(usuario);
        });
    };
    



//ORIGINAL FUNCIONANDO 
const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const sql = "SELECT * FROM usuarios WHERE email = ?";
        db.query(sql, [email], async (error, result) => {

            if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
                console.log(' USUARIO o CONTRASEÑA INCORRECTAS');
                console.log(result[0].password+" || Mostramos result 1");
                return res.status(401).json({ message: ' USUARIO o CONTRASEÑA INCORRECTAS'});
            } else {
                const token = jwt.sign({ userId: result[0].id }, process.env.SECRET_KEY, { expiresIn: "1h" });
                /* res.json({ message: 'Inicio de sesión exitoso', token }); */
                console.log(result[0].id)
                //Agregamos cookie
                const cookieOption = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    //Convierto en dias, guarde un dia que es el valor que esta en la variable de enteorno
                    path: "/",
                        // Elimina HttpOnly si necesitas acceso desde JavaScript
                    httpOnly: false,
                    secure: false // Configura esto como true si estás en HTTPS
                }
                res.cookie("jwt",token, cookieOption);//Generamos la cookie
                res.send({status:"ok",message:"Usuario Loggeado", redirect:"/admin/pedidos"});
            }
        });
    } else {
        res.status(400).send('Email y contraseña son obligatorios');
    }
};

/* const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const sql = "SELECT * FROM usuarios WHERE email = ?";
        db.query(sql, [email], async (error, result) => {
            if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
                console.log('USUARIO o CONTRASEÑA INCORRECTAS');
                return res.status(401).json({ message: 'USUARIO o CONTRASEÑA INCORRECTAS' });
            } else {
                const token = jwt.sign({ userId: result[0].id }, process.env.SECRET_KEY, { expiresIn: "1h" });
                
                // Agregamos cookie y enviamos respuesta
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    path: "/"
                });
                res.json({ status: "ok", message: "Inicio de sesión exitoso", token, redirect: "/admin/pedidos" });
            }
        });
    } else {
        res.status(400).send('Email y contraseña son obligatorios');
    }
};
 */


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
