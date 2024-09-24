@extends('layouts.ap')
@section('content')

  <div class="itemh3" >	
    <h3 class="lines-effect">Mariscos</h3>
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
        @if ($carta->Tipo == "Mariscos Video") 
          <div class="cuadricula_items">
            <div class="cuadricula_caja">
              <div class="imga">
                <video src="{{ asset('storage').'/'.$carta->Foto }}" autoplay muted loop  alt="..."class="ivideo" onclick="openFulImg(this.src)" ></video>
              </div>
              <h4>{{ $carta->Nombre }}</h4>
              <p>{{ $carta->Descripcion }}</p>
              <b>${{ $carta->Precio }}</b>
            </div>
          </div>
        @endif
      @endforeach
      @foreach ( $cartas as $carta )
        @if    ($carta->Tipo == "Mariscos") 
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