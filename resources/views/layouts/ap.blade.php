<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lio San</title>



    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap" rel="stylesheet">


    <link rel="stylesheet" type="text/css" href="{{ asset('css/normalize.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/estilo.css?2820822') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/whatsapp.css') }}">
    <script src="https://kit.fontawesome.com/35c02bc82e.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/45805190a7.js" crossorigin="anonymous"></script>
 

    <!-- Refrescp automatico 
    <meta http-equiv="refresh" content="60">-->
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">



    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/galery.js?28112022') }}" defer></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">


    <!-- Styles -->
    <link href="{{ asset('css/app.css?16112022') }}" rel="stylesheet">
    <!-- Miniatura de pestaña de pagina -->
    <link rel="icon" href="{{ asset('storage').'/images/miniatura.ico' }}">
</head>


  		<!-- Boton flotante whatsapp-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <a href="https://api.whatsapp.com/send?phone=+5491138668253&text=🔥¡Vi%20la%20carta%20digital!🔥%20%20Quiero%20hacerte%20un%20pedido🍗🗒%20%20%20📌" 
      class="float" target="_blank">  
      <i class="fa fa-whatsapp my-float"></i>
    </a>
          <!-- Boton flotante llamada-->
    
    <a href="tel:+5491138668253" class="float-tel" target="_blank">
      <i class="fa fa-solid fa-phone"></i>
    </a>

    <body>
    <div class="container">
        <div class="w-100 w-md-75 w-lg-50 mx-auto">
          <nav class="navbar navbar-expand-lg bg-light bg-white shadow-lg " >
            <div class="container-fluid">
              <a class="navbar-brand" href="{{ url('/') }}">
                <img src="{{ asset('storage').'/images/sarten.png' }}" class="sarten" alt="Main Lofgo">
                <img src="{{ asset('storage').'/images/logoo.ico' }}" class="logo" alt="Main Logo">
              </a>  
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{{ url('/') }}">
                      <i class="fa-solid fa-bell-concierge"></i>
                      Entradas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="{{ url('pollos') }}">
                      <i class="fa-solid fa-drumstick-bite"></i>Pollos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="{{ url('mariscos') }}">
                      <i class="fa-solid fa-fish-fins"></i>Mariscos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active"  href="{{ url('chifa') }}">
                      <i class="fa-solid fa-fire"></i>Chifa</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="{{ url('sopas') }}">
                      <i class="fa-solid fa-soap"></i>Sopas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="{{ url('criolla') }}">
                      <i class="fa-solid fa-plate-wheat"></i>Criolla</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="{{ url('bebidas') }}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-wine-bottle"></i>Bebidas
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="{{ url('bebidas') }}">
                        <i class="fa-solid fa-whiskey-glass"></i>Saborisadas</a></li>
                      <li><a class="dropdown-item" href="{{ url('cervezas') }}">
                        <i class="fa-solid fa-beer-mug-empty"></i>Cervezas</a></li>
                      <li><a class="dropdown-item" href="{{ url('vinos') }}">
                        <i class="fa-solid fa-wine-glass"></i>Vinos</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

            <div class="clvideo">
              <video src="{{ asset('storage').'/video/361.mp4' }}" autoplay muted loop></video>	
            </div>

          <main class="py-3">
            @yield('content')
          </main>
        </div>
      </div>
    </body>
</html>
