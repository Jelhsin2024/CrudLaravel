//definicion de url
const url = 'http://localhost:3000/platillos'
//const url = 'http://localhost:3000/api/platillos/'

//capturando tbody
/* const contenedor = document.querySelector('tbodyId'); */
const contenedor = document.getElementById('tbodyId')
let resultados =''
const contenedorIndex = document.getElementById('tbodyIndex')
let resultadosIndex =''


//seleccionamos el modal
/* const modalPlatillo = new bootstrap.Modal(document.getElementById('modalPlatillo')) */
//seleccionamos el formulario
/* const formulario = document.getElementById('formPlatillo') */
const formPlatillo = document.querySelector('form')
//seleccionando input del formulario
const nombre = document.getElementById('nombre')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const foto = document.getElementById('foto')
const tipo = document.getElementById('inputState')
//alta para guardar el formulario

let opcion = ''

// Inicialización del modal con opciones personalizadas (si es necesario)
var modalPlatillo = new bootstrap.Modal(document.getElementById('modalPlatillo'), {
    backdrop: 'static', // Asegura que el modal no se cierre al hacer clic fuera del mismo
    keyboard: false     // Deshabilita el cierre con la tecla ESC
});


//funcion para abrir modal

btnCrear.addEventListener('click',()=>{
    //limpiamos valores del modal
    nombre.value = ''
    descripcion.value = ''
    precio.value = ''
    foto.value = ''
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
            <img  class="img-thumbnail img-fluid"  src="${platillo.foto}" alt="" width="150px">
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


//funcion para mostrar los platillos en INDEX

const mostrarIndex = (platillos)=>{
    platillos.forEach(platillo => {
        //<input type="submit" onclick="return confirm('De verdad queres borrarlo puto?')" value="Borrar" class="btnBorrar btn btn-danger"></input>
        resultadosIndex+=`
        <tr>
            <td>${platillo.id}</td>
            <td>${platillo.foto}</td>
            <td>${platillo.nombre}</td>
            <td>${platillo.descripcion}</td>
            <td>${platillo.tipo}</td>
            <td>${platillo.precio}</td>
            
            
            <td class="text-center">
                
                    <a class="btnEditar btn btn-warning">Editar</a>
                    <a class="btnBorrar btn btn-danger">Borrar</a>
                    
                
            </td>
        </tr>
        `
    })
    //mostramos con la variable resultado
    contenedorIndex.innerHTML = resultadosIndex
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
on(document, 'click', '.btnEditar', e => {
    //console.log('EDITADO')
    const fila = e.target.parentNode.parentNode
    //console.log(fila)
    //capturamos los datos para editar de las filas
    idForm = fila.children[0].innerHTML
    const fotoForm = fila.children[1].innerHTML
    const nombreForm = fila.children[2].innerHTML
    const descripcionForm = fila.children[3].innerHTML
    const tipoForm= fila.children[4].innerHTML
    precioForm = fila.children[5].innerHTML
    //asignamos los valores captados en una variable en especifico para luego mostrarlo en el form
    foto.value = fotoForm
    nombre.value = nombreForm
    descripcion.value = descripcionForm
    tipo.value = tipoForm
    precio.value = precioForm

    opcion = 'editar'
    modalPlatillo.show()

})


//procedimiento para crear y editar los platillos
formPlatillo.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){
        //Procedimiento para crear
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nombre:nombre.value,
            descripcion:descripcion.value,
            precio:precio.value,
            tipo:tipo.value,
            foto:foto.value
            })
        })
        .then( response => response.json())
        .then( data=>{
            const nuevoPlatillo =[]
            nuevoPlatillo.push(data)
            mostrar(nuevoPlatillo)
            modalPlatillo.hide();  // Ocultamos el modal después de la creación
        })
        .catch(error => console.log(error)); // Manejo de errores
    }
    if(opcion=='editar'){
        //Procedimiento para editar
        fetch(url+idForm,{
            method: 'PUT',
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre:nombre.value,
                descripcion:descripcion.value,
                precio:precio.value,
                tipo:tipo.value,
                foto:foto.value
                })
        })
        .then( response => response.json())
        .then( response => location.reload())
        
    }
    modalPlatillo.hide()
    
})

