const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('ratingDisplay');
const commentInput = document.getElementById('comment');
const respuestaInput = document.getElementById('respuesta');
// Inicialización del modal con opciones personalizadas (si es necesario)
var ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'), {

});
let selectedRating = 0;

// Actualizar las estrellas al hacer clic
function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled'); // Añadir relleno y resplandor
            star.classList.remove('bi-star'); // Quitar borde vacío
            star.classList.add('bi-star-fill'); // Rellenar estrella
        } else {
            star.classList.remove('filled'); // Quitar relleno y resplandor
            star.classList.remove('bi-star-fill'); // Quitar relleno
            star.classList.add('bi-star'); // Volver a borde vacío
        }
    });
    ratingDisplay.textContent = `Puntuación: ${rating}`;
    selectedRating = rating; // Guardar la puntuación seleccionada
}


 // Añadir eventos de clic a las estrellas
 stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        updateStars(rating);
        console.log(`Puntuación seleccionada: ${rating}`);
    });
});


   // Contador de caracteres en el comentario
   commentInput.addEventListener('input', () => {
    const currentLength = commentInput.value.length;
    charCounter.textContent = `${currentLength} / 120 caracteres`;

    if (currentLength === 120) {
        charCounter.style.color = 'red'; // Cambia el color a rojo cuando se alcance el límite
    } else {
        charCounter.style.color = 'gray'; // Mantén el color gris cuando esté dentro del límite
    }
});


   // Contador de caracteres en el comentario
   respuestaInput.addEventListener('input', () => {
    const currentLength = respuestaInput.value.length;
    charCounterRespuesta.textContent = `${currentLength} / 120 caracteres`;

    if (currentLength === 120) {
        charCounterRespuesta.style.color = 'red'; // Cambia el color a rojo cuando se alcance el límite
    } else {
        charCounterRespuesta.style.color = 'gray'; // Mantén el color gris cuando esté dentro del límite
    }
});


// Guardar puntuación y comentario
document.getElementById('saveRating').addEventListener('click', () => {
    const comentario = commentInput.value.trim();
    if (!selectedRating) {
        alert('Por favor, selecciona una puntuación antes de guardar.');
        return;
    }

    if (!comentario) {
        alert('Por favor, escribe un comentario antes de guardar.');
        return;
    }

    console.log(`Puntuación guardada: ${selectedRating}`);
    console.log(`Comentario guardado: ${comentario}`);
    alert(`Puntuación: ${selectedRating}\nComentario: "${comentario}"`);
    // Aquí puedes enviar `selectedRating` y `comentario` al servidor con fetch o axios
});

const url = 'http://localhost:3000/api/comentarios/'



const contenedor = document.getElementById('tbodyId')
//funcion para mostrar los usuarios

function obtenerIdUsuarioDeCookie() {
    const cookieJWT = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    if (cookieJWT) {
        const token = cookieJWT.split('=')[1];
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar payload del token
        return payload.userId;
    }
    return null;
}



const userId = obtenerIdUsuarioDeCookie();





const mostrar = (platillos)=>{
    let resultados ='';
    let estrellas = ""; 
    platillos.forEach(platillo => {
        if (parseInt(platillo.puntuacion) === 1) {

            estrellas=`
                                <i class="bi star1 filled bi-star-fill" data-value="1"></i>
                                <i class="bi bi-star star1" data-value="2"></i>
                                <i class="bi bi-star star1" data-value="3"></i>
                                <i class="bi bi-star star1" data-value="4"></i>
                                <i class="bi bi-star star1" data-value="5"></i>

            `;
        }
        else if (parseInt(platillo.puntuacion) === 2) {

            estrellas=`
                                <i class="bi star1 filled bi-star-fill" data-value="1"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="2"></i>
                                <i class="bi bi-star star1" data-value="3"></i>
                                <i class="bi bi-star star1" data-value="4"></i>
                                <i class="bi bi-star star1" data-value="5"></i>

            `;
        }

        else if (parseInt(platillo.puntuacion) === 3) {

            estrellas=`
                                <i class="bi star1 filled bi-star-fill" data-value="1"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="2"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="3"></i>
                                <i class="bi bi-star star1" data-value="4"></i>
                                <i class="bi bi-star star1" data-value="5"></i>

            `;
        }
        else if (parseInt(platillo.puntuacion) === 4) {

            estrellas=`
                                <i class="bi star1 filled bi-star-fill" data-value="1"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="2"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="3"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="4"></i>
                                <i class="bi bi-star star1" data-value="5"></i>

            `;
        }
        else if (parseInt(platillo.puntuacion) === 5) {

            estrellas=`
                                <i class="bi star1 filled bi-star-fill" data-value="1"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="2"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="3"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="4"></i>
                                <i class="bi star1 filled bi-star-fill" data-value="5"></i>

            `;
        }
        resultados+=`

        
        <tr>
                    <td>${platillo.id}</td>
            <td>${platillo.nombreID}</td>
            
            <td>${platillo.nombre}</td>
            <td>
                            <div class="star1-container" id="starContainer">
                                <!-- 5 estrellas iniciales -->
                                ${estrellas}
                            </div>
            </td>
            <td>${platillo.comentario}</td>
            <td>${platillo.respuesta}</td>
            
            
            <td class="text-center">
                
                    <a class="btnEditar btn btn-warning">Editar</a>
                    <a class="btnBorrar btn btn-danger">Borrar</a>
                    
                
            </td>
        </tr>
        `
    })
    //mostramos con la variable resultado
    contenedor.innerHTML = resultados;
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

    
    alertify.confirm("¿Estás seguro de que deseas borrar este comentario?",
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


/* Procedimiento para editar */
opcion = '';
let idComentario = 0;

on(document, 'click', '.btnEditar', async (e) => {
    const fila = e.target.parentNode.parentNode;
    idComentario = fila.children[0].innerHTML;
    console.log(idComentario);

    try {
        const response = await fetch(url + idComentario, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Error al obtener el comentario');
        }
        const comentario = await response.json();

        // Llenar los campos del modal
        commentInput.value = comentario.comentario;
        respuestaInput.value = comentario.respuesta;
        ratingDisplay.textContent = `Puntuación: ${comentario.puntuacion}`;

        // Actualizar estrellas basadas en la puntuación
        updateStars(parseInt(comentario.puntuacion));

        opcion = 'editar';
        ratingModal.show();
    } catch (error) {
        console.error('Error:', error);
    }
});



// Función para reiniciar las estrellas
function clearStars() {
    stars.forEach((star) => {
        star.classList.remove('filled'); // Quitar relleno y resplandor
        star.classList.remove('bi-star-fill'); // Quitar relleno
        star.classList.add('bi-star'); // Volver a borde vacío
    });
    ratingDisplay.textContent = `Puntuación: 0`; // Reiniciar texto de la puntuación
    selectedRating = 0; // Reiniciar puntuación seleccionada
}


// Evento para el botón "Calificar Platillo"
btnCrear.addEventListener('click', () => {
    // Limpiar valores del modal
    commentInput.value = '';
    respuestaInput.value = '';
    clearStars(); // Llamar a la función para reiniciar las estrellas
    ratingModal.show();
    opcion = 'crear';
});