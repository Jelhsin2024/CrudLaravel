const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../db/db");

dotenv.config();

// Middleware para rutas de solo administradores
function soloAdmin(req, res, next) {
    revisarCookie(req)
        .then((logueado) => {
            if (logueado) {
                console.log("Usuario logueado, continúa...");
                return next(); // Si está logueado, continúa con la siguiente función
            } else {
                console.log("Acceso denegado. Redirigiendo...");
                return res.redirect("/"); // Redirigir al usuario a la raíz


            }
        })
        .catch((error) => {
            console.error("Error en soloAdmin:", error);
            return res.status(500).json({ message: "Error en el servidor. Intenta más tarde." });
        });
}

// Middleware para rutas públicas
function soloPublico(req, res, next) {
    revisarCookie(req)
        .then((logueado) => {
            if (!logueado) {
                console.log("Usuario no logueado, continúa...");
                return next(); // Si no está logueado, continúa con la ruta pública
            } else {
                console.log("Usuario logueado, redirigiendo a admin...");
                return res.redirect("/admin");
            }
        })
        .catch((error) => {
            console.error("Error en soloPublico:", error);
            return res.status(500).json({ message: "Error en el servidor. Intenta más tarde." });
        });
}

// Función para verificar la cookie del usuario
async function revisarCookie(req) {
    try {
        const cookieHeader = req.headers.cookie || ""; // Evitar errores si no hay cookies
        const cookieJWT = cookieHeader.split("; ").find((cookie) => cookie.startsWith("jwt="));

        if (!cookieJWT) {
            console.log("No se encontró la cookie JWT");
            return false; // No hay cookie
        }

        const token = cookieJWT.slice(4); // Eliminar el prefijo "jwt="
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Consultar la base de datos para verificar el usuario
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM usuarios WHERE id = ?";
            db.query(sql, [decoded.userId], (error, result) => {
                if (error) {
                    console.error("Error en la consulta de usuario:", error);
                    return reject(error);
                }
                if (result.length === 0) {
                    console.log("Usuario no encontrado en la base de datos");
                    return resolve(false);
                }
                console.log("Usuario encontrado:", result[0]);
                return resolve(true); // Usuario encontrado, está logueado
            });
        });
    } catch (err) {
        console.error("Error al verificar el token:", err);
        return false; // Token inválido o no se pudo verificar
    }
}

module.exports = {
    soloAdmin,
    soloPublico,
};
