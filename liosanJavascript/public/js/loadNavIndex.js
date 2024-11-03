// loadNav.js
fetch('/pages/admin/navIndex.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la carga del navbar');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container-index').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
