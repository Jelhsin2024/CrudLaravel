//definicion de url
const urlIndex = 'http://localhost:3000/api/platillos'
const urlVideos = 'http://localhost:3000/api/videoportadas'
//capturando tbody

const contenedorIndex = document.getElementById('entradaIndex');

//Capturamos el videoPortada para luego insertar documento html
const videoPortada = document.getElementById('videoPortada');

const contenedorH3 = document.getElementById('h3Entrada');



h3=contenedorH3.innerHTML

let resultadosIndex =''
let resultadosIndexVideoPortada =''





/* Funcion para mostrar Portada de Pollos */
if (h3=="Entradas"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Entrada Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }


if (h3=="Entradas"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Entrada"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imga">
                        <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4>${indexplatillo.nombre}</h4>
                    <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( response => response.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    }




/* Funcion para mostrar Portada de Pollos */
if (h3=="Pollos"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Pollos Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }

/* Funcion para mostrar Pollos */
if (h3=="Pollos"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Pollos"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imga">
                        <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4>${indexplatillo.nombre}</h4>
                    <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    

/* Funcion para mostrar Portada de Pollos */
if (h3=="Mariscos"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Mariscos Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }



/* Funcion para mostrar Mariscos */
if (h3=="Mariscos"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Mariscos"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imga">
                        <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4>${indexplatillo.nombre}</h4>
                    <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    

/* Funcion para mostrar Portada de Pollos */
if (h3=="Chifa"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Chifa Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }

    /* Funcion para mostrar Chifa */
if (h3=="Chifa"){
    //funcion para mostrar los platillos en INDEX

    
    const mostrarIndexVideo = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Chifa Video"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imga">
                        <video autoplay muted loop class="ivideo" onclick="openFulVid(this.src)" src="../../public/${indexplatillo.foto}" class="card-img-top"></video>

                        
                    </div>
                    <h4>${indexplatillo.nombre}</h4>
                    <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}

        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {


            if(indexplatillo.tipo=="Chifa"){
                resultadosIndex+=`
                    <div class="cuadricula_items">
                        <div class="cuadricula_caja">
                        <div class="imga">
                            <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                        </div>
                        <h4>${indexplatillo.nombre}</h4>
                        <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                        <b>$${indexplatillo.precio}</b>
                        </div>
                    </div>
                `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndexVideo(dataIndex))
        .catch( error => console.log(error))
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    }
    



/* Funcion para mostrar Portada de Pollos */
if (h3=="Sopas"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Sopas Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }    


        /* Funcion para mostrar Sopas */
if (h3=="Sopas"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Sopas"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imga">
                        <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4>${indexplatillo.nombre}</h4>
                    <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    

/* Funcion para mostrar Portada de Pollos */
if (h3=="Criolla"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Criolla Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }      

    if (h3=="Criolla"){
        //funcion para mostrar los platillos en INDEX
        
        const mostrarIndex = (indexplatillos)=>{
            indexplatillos.forEach(indexplatillo => {
                if(indexplatillo.tipo=="Criolla"){
                resultadosIndex+=`
                    <div class="cuadricula_items">
                        <div class="cuadricula_caja">
                        <div class="imga">
                            <img src="../../public/${indexplatillo.foto}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                        </div>
                        <h4>${indexplatillo.nombre}</h4>
                        <p class="showPlatillo" >${indexplatillo.descripcion}</p>
                        <b>$${indexplatillo.precio}</b>
                        </div>
                    </div>
                `}
            })
            //mostramos con la variable resultado
            contenedorIndex.innerHTML = resultadosIndex
        }
        
        //Procedimiento para mostrar
        fetch(urlIndex)
            .then( responsee => responsee.json())
            .then( dataIndex => mostrarIndex(dataIndex))
            .catch( error => console.log(error))
        
        
        }
        

/* Funcion para mostrar Portada de Pollos */
if (h3=="Bebidas"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Saborisadas Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }     


        /* Funcion para mostrar Bebidas */
if (h3=="Bebidas"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Bebidas"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imgabebi">
                        <img src="../../public/${indexplatillo.foto}" class="imgbebi" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4  class="bebi">${indexplatillo.nombre}</h4>
                    
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    



/* Funcion para mostrar Portada de Pollos */
if (h3=="Vinos"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Vinos Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }         

        /* Funcion para mostrar Vinos */
if (h3=="Vinos"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Vinos"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imgabebi">
                        <img src="../../public/${indexplatillo.foto}" class="imgbebi" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4  class="bebi">${indexplatillo.nombre}</h4>
                   
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    
/* Funcion para mostrar Portada de Pollos */
if (h3=="Cervezas"){
    //funcion para mostrar buscar la portada y mostrarla
    
    const portadaIndexPollos = (indexVideoPortadas)=>{
        indexVideoPortadas.forEach(indexVideoPortada => {
            if(indexVideoPortada.tipo_videoPortada=="Cervezas Portada"){
                resultadosIndexVideoPortada+=`

                <video src="../../public/video/${indexVideoPortada.file_videoPortada  || '../../public/video/361.mp4'}" autoplay muted loop ></video>	
            `}
        })
        //mostramos con la variable resultado
        videoPortada.innerHTML = resultadosIndexVideoPortada
    }
    
    //Procedimiento para mostrar
    fetch(urlVideos)
        .then( responsee => responsee.json())
        .then( dataIndex => portadaIndexPollos(dataIndex))
        .catch( error => console.log(error))
    
    
    }   


        /* Funcion para mostrar Cervezas */
if (h3=="Cervezas"){
    //funcion para mostrar los platillos en INDEX
    
    const mostrarIndex = (indexplatillos)=>{
        indexplatillos.forEach(indexplatillo => {
            if(indexplatillo.tipo=="Cervezas"){
            resultadosIndex+=`
                <div class="cuadricula_items">
                    <div class="cuadricula_caja">
                    <div class="imgabebi">
                        <img src="../../public/${indexplatillo.foto}" class="imgbebi" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
                    </div>
                    <h4 class="bebi">${indexplatillo.nombre}</h4>
                    
                    <b>$${indexplatillo.precio}</b>
                    </div>
                </div>
            `}
        })
        //mostramos con la variable resultado
        contenedorIndex.innerHTML = resultadosIndex
    }
    
    //Procedimiento para mostrar
    fetch(urlIndex)
        .then( responsee => responsee.json())
        .then( dataIndex => mostrarIndex(dataIndex))
        .catch( error => console.log(error))
    
    
    }
    





