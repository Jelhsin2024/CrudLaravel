@extends('layouts.app')

@section('content')
<div class="container">


<form action="{{ url('/plato')}}" method="POST" enctype="multipart/form-data" files="true">
@csrf
     
@include('plato.form',['modo'=>'Guardar'])
    
</form>
</div>


@endsection