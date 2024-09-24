@extends('layouts.ap')
@section('content')

  <div class="itemh3" >	
    <h3 class="lines-effect">Cervezas</h3>
  </div>		

  @foreach ( $cartas as $carta )
  @if    ($carta->Nombre == "Chaufa de Pollo")
    <div class="ful-img" id="fulImgBox">
      <img src="{{ asset('storage').'/'.$carta->Foto }}" id="fulImg" alt="">
      <span class="bebidas" onclick="closeImg()"><i class="fa-solid fa-xmark"></i></span>
    </div>
  @endif 
@endforeach

  <div class="cuadricula_container">
    <div class="cuadricula">
      @foreach ( $cartas as $carta )
        @if    ($carta->Tipo == "Cervezas") 
          <div class="cuadricula_items">
            <div class="cuadricula_caja">
              <div class="imgabebi">
                <img src="{{ asset('storage').'/'.$carta->Foto }}" class="imgbebi"   alt="..." onclick="openFulImg(this.src)" >
              </div>
              <h4 class="bebi">{{ $carta->Nombre }}</h4>
              <p>{{ $carta->Descripcion }}</p>
              <b>${{ $carta->Precio }}</b>
            </div>
          </div>
        @endif
      @endforeach
    </div>
  </div>
@endsection