const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../db/db");

dotenv.config();

// Middleware para verificar el rol del usuario
function verificarRol(rolesPermitidos) {
    return async (req, res, next) => {
        try {
            const cookieHeader = req.headers.cookie || "";
            const cookieJWT = cookieHeader.split("; ").find((cookie) => cookie.startsWith("jwt="));

            if (!cookieJWT) {
                console.log("No se encontró la cookie JWT");
                return res.status(403).json({ message: "Acceso denegado" });
            }

            const token = cookieJWT.slice(4);
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            // Consultar la base de datos para verificar el usuario
            const sql = "SELECT * FROM usuarios WHERE id = ?";
            db.query(sql, [decoded.userId], (error, result) => {
                if (error) {
                    console.error("Error en la consulta de usuario:", error);
                    return res.status(500).json({ message: "Error en el servidor" });
                }
                if (result.length === 0) {
                    console.log("Usuario no encontrado");
                    return res.status(403).json({ message: "Acceso denegado" });
                }

                const usuario = result[0];
                if (!rolesPermitidos.includes(usuario.rol)) {
                    console.log(`Rol no permitido: ${usuario.rol}`);
                    return res.status(403).json({ message: "Acceso denegado" });
                }

                // Continuar con la siguiente función
                req.usuario = usuario; // Agregamos datos del usuario a la request para futuros usos
                next();
            });
        } catch (err) {
            console.error("Error al verificar el token:", err);
            return res.status(403).json({ message: "Acceso denegado" });
        }
    };
}

// Mantén tus funciones actuales si todavía las necesitas
function soloAdmin(req, res, next) {
    revisarCookie(req)
        .then((logueado) => {
            if (logueado) {
                console.log("Usuario logueado, continúa...");
                return next();
            } else {
                console.log("Acceso denegado. Redirigiendo...");
                return res.redirect("/");
            }
        })
        .catch((error) => {
            console.error("Error en soloAdmin:", error);
            return res.status(500).json({ message: "Error en el servidor. Intenta más tarde." });
        });
}

function soloPublico(req, res, next) {
    revisarCookie(req)
        .then((logueado) => {
            if (!logueado) {
                console.log("Usuario no logueado, continúa...");
                return next();
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

async function revisarCookie(req) {
    try {
        const cookieHeader = req.headers.cookie || "";
        const cookieJWT = cookieHeader.split("; ").find((cookie) => cookie.startsWith("jwt="));

        if (!cookieJWT) {
            console.log("No se encontró la cookie JWT");
            return false;
        }

        const token = cookieJWT.slice(4);
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM usuarios WHERE id = ?";
            db.query(sql, [decoded.userId], (error, result) => {
                if (error) {
                    console.error("Error en la consulta de usuario:", error);
                    return reject(error);
                }
                if (result.length === 0) {
                    console.log("Usuario no encontrado");
                    return resolve(false);
                }
                console.log("Usuario encontrado:", result[0]);
                return resolve(true);
            });
        });
    } catch (err) {
        console.error("Error al verificar el token:", err);
        return false;
    }
}

module.exports = {
    verificarRol,
    soloAdmin,
    soloPublico,
};
