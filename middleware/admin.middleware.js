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
                return res.status(401).json({ message: "Acceso denegado: No autorizado" });
            }

            const token = cookieJWT.slice(4);

            jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
                if (error) {
                    if (error.name === "TokenExpiredError") {
                        console.error("Token expirado:", error);
                        return res.status(401).json({ message: "Token expirado. Por favor, inicia sesión nuevamente." });
                    }
                    console.error("Error al verificar el token:", error);
                    return res.status(403).json({ message: "Acceso denegado: Token inválido" });
                }

                // Consultar la base de datos para verificar el rol del usuario
                const sql = "SELECT * FROM usuarios WHERE id = ?";
                db.query(sql, [decoded.userId], (dbError, result) => {
                    if (dbError) {
                        console.error("Error en la consulta de usuario:", dbError);
                        return res.status(500).json({ message: "Error interno del servidor" });
                    }
                    if (result.length === 0) {
                        console.log("Usuario no encontrado");
                        return res.status(403).json({ message: "Acceso denegado: Usuario no encontrado" });
                    }

                    const usuario = result[0];
                    if (!rolesPermitidos.includes(usuario.rol)) {
                        console.log(`Rol no permitido: ${usuario.rol}`);
                        return res.status(403).json({ message: "Acceso denegado: Rol no autorizado" });
                    }

                    // Continuar con la siguiente función
                    req.usuario = usuario; // Agregamos datos del usuario a la request para futuros usos
                    next();
                });
            });
        } catch (err) {
            console.error("Error inesperado en verificarRol:", err);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    };
}

// Revisión de cookie para las rutas públicas o privadas
async function revisarCookie(req) {
    try {
        const cookieHeader = req.headers.cookie || "";
        const cookieJWT = cookieHeader.split("; ").find((cookie) => cookie.startsWith("jwt="));

        if (!cookieJWT) {
            console.log("No se encontró la cookie JWT");
            return false;
        }

        const token = cookieJWT.slice(4);

        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
                if (error) {
                    if (error.name === "TokenExpiredError") {
                        console.error("Token expirado:", error);
                        return resolve(false); // Token expirado
                    }
                    console.error("Error al verificar el token:", error);
                    return reject(error);
                }

                // Verificar en la base de datos si el usuario existe
                const sql = "SELECT * FROM usuarios WHERE id = ?";
                db.query(sql, [decoded.userId], (dbError, result) => {
                    if (dbError) {
                        console.error("Error en la consulta de usuario:", dbError);
                        return reject(dbError);
                    }
                    if (result.length === 0) {
                        console.log("Usuario no encontrado");
                        return resolve(false);
                    }

                    console.log("Usuario encontrado:", result[0]);
                    resolve(true); // Usuario encontrado
                });
            });
        });
    } catch (err) {
        console.error("Error al verificar la cookie:", err);
        return false;
    }
}

// Middleware solo para usuarios con sesión activa
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
            return res.status(500).json({ message: "Error interno del servidor" });
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
            return res.status(500).json({ message: "Error interno del servidor" });
        });
}

module.exports = {
    verificarRol,
    soloAdmin,
    soloPublico,
};
