@extends('layouts.ap')
@section('content')

  <div class="itemh3" >	
    <h3 class="lines-effect">Chifa</h3>
  </div>		
  @foreach ( $cartas as $carta )
    @if    ($carta->Nombre == "Chaufa de Pollo")
      <div class="ful-img" id="fulImgBox">
        <span onclick="closeImg()"><i class="fa-solid fa-xmark"></i></span>
        <img src="{{ asset('storage').'/'.$carta->Foto }}" id="fulImg" alt="">
        
      </div>
    @endif 
  @endforeach

  @foreach ( $cartas as $carta )
    @if    ($carta->Nombre == "Taipá a la Plancha")
      <div class="ful-vid" id="fulVidBox">
        <video autoplay muted loop> <source src="{{ asset('storage').'/'.$carta->Foto }}"></video>
        <span onclick="closeVid()"><i class="fa-solid fa-xmark"></i></span>
      </div>
    @endif 
  @endforeach


  <div class="cuadricula_container">
    <div class="cuadricula">
      @foreach ( $cartas as $carta )
        @if ($carta->Tipo == "Chifa Video") 
          <div class="cuadricula_items">
            <div class="cuadricula_caja">
              <div class="imga">
                <video autoplay muted loop class="ivideo" onclick="openFulVid(this.src)"> <source src="{{ asset('storage').'/'.$carta->Foto }}" alt="..."class="ivideo"  ></video>
              </div>
              <h4>{{ $carta->Nombre }}</h4>
              <p>{{ $carta->Descripcion }}</p>
              <b>${{ $carta->Precio }}</b>
            </div>
          </div>
        @endif
      @endforeach
      @foreach ( $cartas as $carta )
        @if    ($carta->Tipo == "Chifa") 
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