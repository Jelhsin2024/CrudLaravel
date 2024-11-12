// admin.middleware.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../db/db"); // Asegúrate de tener acceso a la conexión de la base de datos

dotenv.config();

function soloAdmin(req, res, next) {
    const logueado = revisarCookie(req, next, res);
    console.log(logueado+" Verificamos si login es correcto con el token");
    if (logueado) return next();

    /* return res.redirect("/"); */

}

function soloPublico(req, res, next) {
    const logueado = revisarCookie(req, next, res);
    if (!logueado) return next();
    return res.redirect("/admin");
}

function revisarCookie(req, next, res) {
    try {
        const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
        const decoded = jwt.verify(cookieJWT, process.env.SECRET_KEY);

        // Consulta a la base de datos para verificar si el usuario existe
        const sql = "SELECT * FROM usuarios WHERE id = ?";
        db.query(sql, [decoded.userId], (error, result) => {
            if (error) {
                console.error("Error en la consulta de usuario:", error);
                return res.status(500).json({ message: "Error en el servidor" });
            }
            if (result.length === 0) {
                console.log("Usuario no encontrado en la base de datos");
                return false;
            }
            console.log("Usuario encontrado:", result[0]);
            next(); // Si el usuario es válido, continúa con la siguiente función
        });
    } catch (err) {
        console.error("Error al verificar el token:", err);
        return false;
    }
}

module.exports = {
    soloAdmin,
    soloPublico
};
