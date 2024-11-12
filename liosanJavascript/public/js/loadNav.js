// loadNav.js
fetch('/pages/admin/navAdmin.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la carga del navbar');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Asignar el evento al botón de logout después de cargar el navbar
        const logout = document.getElementById('logout');
        if (logout) {
            logout.addEventListener('click', () => {
                // Cerramos sesión eliminando los valores de la cookie
                document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.location.href = "/login";
            });
        }
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
