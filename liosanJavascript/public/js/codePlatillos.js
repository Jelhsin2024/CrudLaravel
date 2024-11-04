//definicion de url
const url = 'http://localhost:3000/api/platillos/'

//capturando tbody

const contenedor = document.getElementById('tbodyId')
let resultados =''

//seleccionamos el modal

//seleccionamos el formulario
const formPlatillo = document.querySelector('form')

//seleccionando input del formulario modal
const nombre = document.getElementById('nombre')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const foto = document.getElementById('foto')
const imgModal = document.getElementById('imgModal')
const tipo = document.getElementById('inputState')
let opcion = ''

// Agrega un evento para detectar cambios en el input (cuando se selecciona un archivo)
let archivoSeleccionado = null;
foto.addEventListener('change', (event) => {
    archivoSeleccionado = event.target.files[0]; // Accede al archivo
/*     console.log("Archivo seleccionado:", archivoSeleccionado); // Imprime la información del archivo
    if (archivoSeleccionado) {
        console.log("Nombre del archivo:", archivoSeleccionado.name);
        console.log("Tipo de archivo:", archivoSeleccionado.type);
        console.log("Tamaño del archivo:", archivoSeleccionado.size);
    } */
});


// Inicialización del modal con opciones personalizadas (si es necesario)
var modalPlatillo = new bootstrap.Modal(document.getElementById('modalPlatillo'), {

});

//funcion para abrir modal
btnCrear.addEventListener('click',()=>{
    //limpiamos valores del modal
    nombre.value = ''
    descripcion.value = ''
    precio.value = ''
    imgModal.src = ''
    archivoSeleccionado = null;
    tipo.value = ''
    //mostramos el modal
    
    modalPlatillo.show()
    //opcion para editar en el mismo modal
    opcion = 'crear'
})

//funcion para mostrar los platillos

const mostrar = (platillos)=>{
    platillos.forEach(platillo => {
        //<input type="submit" onclick="return confirm('De verdad queres borrarlo puto?')" value="Borrar" class="btnBorrar btn btn-danger"></input>
        resultados+=`
        <tr>
            <td>${platillo.id}</td>
            <td>
                <img class="img-thumbnail img-fluid" src="../../public/${platillo.foto || 'default-image.jpg'}" alt="" width="150px">

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
        `
    })
    //mostramos con la variable resultado
    contenedor.innerHTML = resultados
}


//Procedimiento para mostrar
fetch(url)
    .then( response => response.json())
    .then( data => mostrar(data))
    .catch( error => console.log(error))


//funcion para crear en en el dom
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//eliminamos con el boton borrar y usamos alertify para mas boneto
on(document, 'click', '.btnBorrar', e => {

    //guardamos en una variable la fila completa en la que se hizo clic con el boton borrar
    const fila = e.target.parentNode.parentNode;
    // guardamos en una variable el id de la fila que capturamos
    const id = fila.firstElementChild.innerHTML;

    
    alertify.confirm("¿Estás seguro de que deseas borrar este platillo?",
        function(){
            fetch(url+id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(()=> location.reload())
          //alertify.success('Borrado')
        },
        function(){
        alertify.error('Cancelado')
        })
});

//asignamos los valores de cada platillo a un variable para mostrarlos en el modal al hacer clic en el boton editar
let idForm = 0
let precioForm = 0
/* on(document, 'click', '.btnEditar', e => {
    //console.log('EDITADO')
    const fila = e.target.parentNode.parentNode
    //console.log(fila)
    //capturamos los datos para editar de las filas
    idForm = fila.children[0].innerHTML
    // Selecciona todos los <tr> y toma el segundo (por ejemplo) en la lista
    const trElements = document.querySelectorAll('tr');

    // Captura el `src` de la imagen en el segundo <tr> (índice 1)
    const imgSrc = trElements[1].querySelector('img').src;
    console.log(imgSrc)
    const fotoForm = imgSrc
    const nombreForm = fila.children[2].innerHTML
    const descripcionForm = fila.children[3].innerHTML
    const tipoForm= fila.children[4].innerHTML
    precioForm = fila.children[5].innerHTML
    //asignamos los valores captados en una variable en especifico para luego mostrarlo en el form
    imgModal.src = fotoForm
    nombre.value = nombreForm
    descripcion.value = descripcionForm
    tipo.value = tipoForm
    precio.value = precioForm

    opcion = 'editar'
    modalPlatillo.show()

}) */

    
// Procedimiento para abrir el modal y cargar datos para editar
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;

    // Obtén el src de la imagen en la fila actual
    const fotoForm = fila.querySelector('img').src; // Captura correctamente la imagen
    imgModal.src = fotoForm;

    // Asigna los valores al formulario
    nombre.value = fila.children[2].innerHTML;
    descripcion.value = fila.children[3].innerHTML;
    tipo.value = fila.children[4].innerHTML;
    precio.value = fila.children[5].innerHTML;

    // Limpia la selección de archivo
    archivoSeleccionado = null;
    foto.value = ''; // Limpia el input de archivo
    console.log(imgModal.src)
    opcion = 'editar';
    modalPlatillo.show();
    
});
    

formPlatillo.addEventListener('submit', (e) => {
    e.preventDefault();

    // Crea un nuevo objeto FormData
    const formData = new FormData();

    // Añade los datos del formulario al objeto FormData
    formData.append('nombre', nombre.value);
    formData.append('descripcion', descripcion.value);
    formData.append('precio', precio.value);
    formData.append('tipo', tipo.value);

    // Solo añadimos 'foto' al FormData si se seleccionó una nueva imagen
    if (archivoSeleccionado) {
        formData.append('foto', archivoSeleccionado); // Añade el archivo al FormData
    } else if (opcion === 'editar' && imgModal.src) {
        // No añadimos el campo 'foto' al FormData si ya hay una imagen y no se seleccionó una nueva
        console.log("Conservando la imagen actual, no se envía ninguna imagen nueva.");
    }

    // En este punto, el `formData` tiene todos los datos excepto `foto` si no se seleccionó una nueva imagen.

    if (opcion === 'crear') {
        // Procedimiento para crear
        fetch(url, {
            method: 'POST',
            body: formData // Envía el FormData
        })
        .then(response => response.json())
        .then(data => {
            mostrar([data]);
            modalPlatillo.hide();
            location.reload(); // Recargamos la página después de crear
        })
        .catch(error => console.log(error)); // Manejo de errores
    }

    if (opcion === 'editar') {
        // Procedimiento para editar
        console.log("Muestro que hay en el form data")
        // Itera sobre los valores de formData para mostrarlos en la consola
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}:`, pair[1]);
}
        fetch(url + idForm, {
            method: 'PUT',
            body: formData // Envía el FormData
        })
        .then(response => response.json())
        .then(response => location.reload())
            
        /* .then(response => location.reload());  */// Recargamos la página después de editar
    }
});
