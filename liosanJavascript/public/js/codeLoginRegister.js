
//capturando tbody para mostrar los usuarios
const contenedor = document.getElementById('tbodyRegisterAdmin')


let resultados =''


// Capturamos el modal
var modalRegistro = new bootstrap.Modal(document.getElementById('modalRegistro'));



//Capturamos el form modal
const formRegister = document.getElementById('formModalId')
//Capturamos el form login
const formLoginId = document.getElementById('formLoginId')

//seleccionando input del formulario modal
const emailRegister = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const nombreRegister = document.getElementById('nombreRegister')
const apellidoRegister = document.getElementById('apellidoRegister')
const direccionRegister = document.getElementById('direccionRegister')
const localidadRegister = document.getElementById('localidadRegister')
const rolRegister = document.getElementById('rolRegister')
const celularRegister = document.getElementById('celularRegister')


//Variable paga guardar o editar segun fuera el caso jejeje
let opcion = ''
//seleccionando input del formulario de inicio de sesin
const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')


//funcion para abrir modal



document.addEventListener('DOMContentLoaded', () => {
    const btnRegister = document.getElementById('btnRegister');
    btnRegister.addEventListener('click', () => {
        // Código de tu función para abrir el modal
        emailRegister.value = ''
        passwordRegister.value = ''
        nombreRegister.value = ''
        apellidoRegister.value = ''
        direccionRegister.value = ''
        localidadRegister.value = ''
        rolRegister.value = ''
        celularRegister.value = ''
        modalRegistro.show()
        opcion = 'crear'
    });
});


//funcion para crear en en el dom
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}


//procedimiento para login
/* formLoginId.addEventListener('submit', (e)=>{
    e.preventDefault()
    
        //ruta del login
        fetch("http://localhost:3000/auth/login", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
            email: emailLogin.value,
            password: passwordLogin.value,
            })
        })
        .then( response => response.json())
        .then( data=>{})
        .catch(error => console.log(error)); // Manejo de errores
    
    
    
}) */



//Procedimiento para registrar un nuevo usuario desde el login y alertify para confirmacion
formLoginId.addEventListener("submit", (e) => {
    e.preventDefault();
    loginUsuario(); // Llama a la función que ya maneja la creación
});

async function loginUsuario() {
    const data = {
        email: emailLogin.value,
        password: passwordLogin.value,
    };

    try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alertify.success("Usuario logueado correctamente perrrroooooo!!!!!!!!");
            localStorage.setItem("token", result.token);
            setTimeout(() => {
                window.location.href = "admin/platillos.html";
            }, 4000);
        } else {
            const error = await response.json();
            alertify.error(`Error: ${error.message || "No se pudo loguear :( lpm!!!"}`);
        }
    } catch (error) {
        alertify.error("Error en la conexión");
        console.error("Error en la solicitud", error);
    }
}

//FIIIIN Procedimiento para registrar un nuevo usuario desde el login y alertify para confirmacion









//Procedimiento para registrar un nuevo usuario desde el login y alertify para confirmacion
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    if (opcion === "crear") {
        registrarUsuario(); // Llama a la función que ya maneja la creación
    } 
});

async function registrarUsuario() {
    const data = {
        nombre: nombreRegister.value,
        apellido: apellidoRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        direccion: direccionRegister.value,
        localidad: localidadRegister.value,
        celular: celularRegister.value,
        rol: rolRegister.value,
    };

    try {
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alertify.success("Usuario registrado con éxito");
/*             setTimeout(() => {
                window.location.href = "/platillos.html";
            }, 2000); */
        } else {
            const error = await response.json();
            alertify.error(`Error: ${error.message || "No se pudo registrar"}`);
        }
    } catch (error) {
        alertify.error("Error en la conexión");
        console.error("Error en la solicitud", error);
    }
}

//FIIIIN Procedimiento para registrar un nuevo usuario desde el login y alertify para confirmacion

//procedimiento para crear un usuario desde el login
/* formRegister.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){
        //Procedimiento para crear
        fetch("http://localhost:3000/auth/register", {
            method: 'POST',
            headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nombre: nombreRegister.value,
            apellido:apellidoRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value,
            direccion: direccionRegister.value,
            localidad: localidadRegister.value,
            celular: celularRegister.value,
            rol: rolRegister.value

            })
        })
        .then( response => response.json())
        .then( data=>{

        })
        .catch(error => console.log(error)); // Manejo de errores
    }
    
    
}) */






