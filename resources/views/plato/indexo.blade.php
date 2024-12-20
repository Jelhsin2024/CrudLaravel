@extends('layouts.ap')
@section('content')
  <!--<div class="container" >
    <a href="{{ url('bebidas') }}" class="btn btn-success" >Ingresar Nuevo Platillo</a>
    <br>
    <br>-->
  </div>
  <div class="itemh3" >	
    <h3 class="lines-effect">Entradas</h3>
  </div>	


  @foreach ( $cartas as $carta )
    @if    ($carta->Nombre == "Chaufa de Pollo")
      <div class="ful-img" id="fulImgBox">
        <img src="{{ asset('storage').'/'.$carta->Foto }}" id="fulImg" alt="">
        <span onclick="closeImg()"><i class="fa-solid fa-xmark"></i></span>
      </div>
    @endif 
  @endforeach

  <div class="cuadricula_container">
    <div class="cuadricula">
      @foreach ( $cartas as $carta )
        @if    ($carta->Tipo == "Entrada") 
          <div class="cuadricula_items">
            <div class="cuadricula_caja">
              <div class="imga">
                <img src="{{ asset('storage').'/'.$carta->Foto }}" class="card-img-top" alt="..." onclick="openFulImg(this.src)" >
              </div>
              <h4>{{ $carta->Nombre }}</h4>
              <p>{{ $carta->Descripcion }}</p>
              <b>${{ $carta->Precio }}</b>
            </div>
          </div>
        @endif
        
      @endforeach
    </div>
  </div>
@endsection
