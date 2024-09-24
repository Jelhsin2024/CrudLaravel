<h1>{{$modo}} platillo</h1>
<br>

    @if(count($errors)>0)
    <div class="alert alert-danger" role="alert">
        
        <ul>   
            @foreach ( $errors->all() as $error)
                <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif

<div class="form-group" width="300px">



    <label for="Tipo">Â¿Que tipo platillo ess?</label> 
    
            <!--<select class="form-control mt" name="Tipo" id="Tipo"  value="{{ isset($carta->Tipo)?$carta->Tipo:old('Tipo')}}">
                <option value="Entrada">Entrada</option>
                <option value="Pollos">Pollos</option>
                <option value="Mariscos">Mariscos</option>
                <option value="Chifa">Chifa</option>
                <option value="Criolla">Criolla</option>
                <option value="Sopas">Sopas</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Vinos">Vinos</option>
                <option value="Cervezas">Cervezas</option>
            </select>
            -->
        <select class="form-control mt" name="Tipo" id="Tipo">
            <option value="Entrada" {{ isset($carta->Tipo) && $carta->Tipo == 'Entrada' ? 'selected' : '' }}>Entrada</option>
            <option value="Pollos" {{ isset($carta->Tipo) && $carta->Tipo == 'Pollos' ? 'selected' : '' }}>Pollos</option>
            <option value="Mariscos" {{ isset($carta->Tipo) && $carta->Tipo == 'Mariscos' ? 'selected' : '' }}>Mariscos</option>
            <option value="Chifa" {{ isset($carta->Tipo) && $carta->Tipo == 'Chifa' ? 'selected' : '' }}>Chifa</option>
            <option value="Criolla" {{ isset($carta->Tipo) && $carta->Tipo == 'Criolla' ? 'selected' : '' }}>Criolla</option>
            <option value="Sopas" {{ isset($carta->Tipo) && $carta->Tipo == 'Sopas' ? 'selected' : '' }}>Sopas</option>
            <option value="Bebidas" {{ isset($carta->Tipo) && $carta->Tipo == 'Bebidas' ? 'selected' : '' }}>Bebidas</option>
            <option value="Vinos" {{ isset($carta->Tipo) && $carta->Tipo == 'Vinos' ? 'selected' : '' }}>Vinos</option>
            <option value="Cervezas" {{ isset($carta->Tipo) && $carta->Tipo == 'Cervezas' ? 'selected' : '' }}>Cervezas</option>
            <!-- Resto de las opciones con la misma l«Ñgica -->
        </select>

    <label for="Nombre">Nombre</label> 
    <input type="text" name="Nombre" class="form-control" value="{{ isset($carta->Nombre)?$carta->Nombre:old('Nombre')}}" id="Nombre">

    
    <label for="Descripcion">Descripcion</label> 
    <input type="text" name="Descripcion" class="form-control" value="{{ isset($carta->Descripcion)?$carta->Descripcion:old('Descripcion') }}" id="Descripcion">

    
    <label for="Precio">Precio</label> 
    <input type="text" name="Precio" class="form-control" value="{{ isset($carta->Precio)?$carta->Precio:old('Precio')}}" id="Precio">


    


    
    <label for="Foto">Foto:</label> 
  
    
    @if (isset($carta->Foto))
    <img class="img-thumbnail img-fluid" src="{{ asset('storage').'/'.$carta->Foto }}" alt="" width="250px">
    @endif

    
    
    <input type="file" name="Foto" class="form-control" value="{{ isset($carta->Foto)?$carta->Foto:'' }}" id="Foto"> <br>
    

    

    <input type="submit" value="{{$modo}} Datos" class="btn btn-dark ">
    

    <a href="{{ url('plato/') }}" class="btn btn-primary">Volver a ver los platillos</a>
</div>

