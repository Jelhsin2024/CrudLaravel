// Definición de URL del endpoint
const url = 'http://localhost:3000/api/platillos/';

// Captura de elementos del DOM
const contenedor = document.getElementById('tbodyId');
let resultados = '';

// Seleccionamos el formulario y los campos
const formPlatillo = document.querySelector('form');
const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const foto = document.getElementById('foto');
const tipo = document.getElementById('inputState');
let archivoSeleccionado = null;
let opcion = ''; // Determina si estamos creando o editando un platillo
let idForm = 0; // ID del platillo a editar

// Evento para detectar cambios en el input de imagen
foto.addEventListener('change', (event) => {
    archivoSeleccionado = event.target.files[0];
});

// Inicialización del modal
const modalPlatillo = new bootstrap.Modal(document.getElementById('modalPlatillo'));

// Evento para abrir el modal en modo "Crear Platillo"
document.getElementById('btnCrear').addEventListener('click', () => {
    nombre.value = '';
    descripcion.value = '';
    precio.value = '';
    foto.value = '';
    tipo.value = '';
    archivoSeleccionado = null; // Resetear el archivo seleccionado
    opcion = 'crear';
    modalPlatillo.show();
});

// Función para mostrar los platillos en la tabla
const mostrar = (platillos) => {
    resultados = '';
    platillos.forEach(platillo => {
        resultados += `
            <tr>
                <td>${platillo.id}</td>
                <td>
                    <img class="img-thumbnail img-fluid" src="../../public/${platillo.foto}" alt="" width="150px">
                </td>
                <td>${platillo.nombre}</td>
                <td>${platillo.descripcion}</td>
                <td>${platillo.tipo}</td>
                <td>$${platillo.precio}</td>
                <td class="text-center">
                    <a class="btnEditar btn btn-warning">Editar</a>
                    <a class="btnBorrar btn btn-danger">Borrar</a>
                </td>
            </tr>
        `;
    });
    contenedor.innerHTML = resultados;
};

// Cargar los platillos al iniciar
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));

// Función para agregar eventos a los botones dinámicos (Borrar/Editar)
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

// Eliminar platillo
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    
    alertify.confirm("¿Estás seguro de que deseas borrar este platillo?",
        function() {
            fetch(url + id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => location.reload());
        },
        function() {
            alertify.error('Cancelado');
        }
    );
});

// Abrir modal para editar platillo
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;
    archivoSeleccionado = null; // Resetear archivo seleccionado
    foto.value = ''; // Limpiar el campo de archivo

    // Cargar valores del platillo en el modal
    nombre.value = fila.children[2].innerHTML;
    descripcion.value = fila.children[3].innerHTML;
    tipo.value = fila.children[4].innerHTML;
    precio.value = fila.children[5].innerHTML;
    opcion = 'editar';
    modalPlatillo.show();
});

// Procedimiento para crear y editar platillos
formPlatillo.addEventListener('submit', (e) => {
    e.preventDefault();

    // Crear FormData para manejar datos y archivos
    const formData = new FormData();
    formData.append('nombre', nombre.value);
    formData.append('descripcion', descripcion.value);
    formData.append('precio', precio.value);
    formData.append('tipo', tipo.value);
    if (archivoSeleccionado) {
        formData.append('foto', archivoSeleccionado); // Añadir archivo solo si se seleccionó
    }

    // Crear o Editar platillo según la opción seleccionada
    if (opcion === 'crear') {
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            mostrar([data]); // Mostrar nuevo platillo en la tabla
            modalPlatillo.hide();
            alert('Platillo creado con éxito');
        })
        .catch(error => console.log(error));
    }

    if (opcion === 'editar') {
        fetch(url + idForm, {
            method: 'PUT',
            body: formData
        })
        .then(response => response.json())
        .then(() => {
            location.reload();
        })
        .catch(error => console.log(error));
    }
});
