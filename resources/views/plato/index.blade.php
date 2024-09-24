@extends('layouts.app')


@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.1/css/responsive.bootstrap5.min.css">
@endsection




@section('content')



</br>
<div class="container" >
   
        
    <h1 class="container mb-4" >Lista de platillos </h1>
    </br>
    
    <a href="{{ url('plato/create') }}" class="btn btn-success" >Ingresar Nuevo Platillo</a>
    

    @if(Session::has('mensaje'))
    <div class="alert alert-success alert-dismissible" role="alert">
    
    <h1>{{ Session::get('mensaje')}}</h1>
    </div>    
    @endif
    
    </br>
</br>
    
    <form class="d-flex m-2 p-3" role="search" action="{{route('plato.index') }}" method="get">
         <label class=" mt">Filtra por tipo:</label>  
        
        <select class="form-control mt" name="texto" id="Tipo" class="form-control" value="">
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

        
        
        <button class="btn btn-outline-success mt" type="submit" value="Buscar">Aplicar</button>
    </form>
  
   

    <div class="card" >
        <div class="card-body">
            

    <table class="table table-bordered table-striped table-hover table-responsive table-sm align-middle" class="" id="usuarios">


        <thead class="">
            <tr>
                <th>#</th>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Descripci&oacute;n</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>



        <tbody>
            @if (count($cartas)<=0)

                <tr>
                    <td colspan="8">
                        No se encontraron resultados
                    </td>
                    <td> 
                        <a href="{{ url('plato/') }}" class="btn btn-primary">
                            Volver
                        </a>
                    </td>
                    
                </tr>
                
                @else
                @foreach ( $cartas as $carta )


                    <tr>
                        <td>{{ $carta->id }}</td>


                        
                        <td>
                            <img  class="img-thumbnail img-fluid"  src="{{ asset('storage').'/'.$carta->Foto }}" alt="" width="150px">
                        </td>
                        <td>{{ $carta->Nombre }}</td>
                        <td>{{ $carta->Descripcion }}</td>
                        <td>{{ $carta->Tipo }}</td>
                        <td>${{ $carta->Precio }}</td>
                        <td>
                            

                         
                            
                           
                        <form action="{{ url('/plato/'.$carta->id)}}" class="d-inline" method="post">
                                                    <a href="{{ url('/plato/'.$carta->id.'/edit') }}" class="btn btn-warning ">Editar    
                        </a>
                        @csrf
                        {{method_field('DELETE')}}
                        <input type="submit" onclick="return confirm('De verdad queres borrarlo puto?')" value="Borrar"  class="btn btn-danger">   


                        </form>
                        
                        </td>
                    </tr>

                @endforeach
            @endif    
        </tbody>
    </table>
    </div>
    </div>
    

</div>
@endsection


@section('js')
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.4.1/js/responsive.bootstrap5.min.js"></script>
    <script>
       
        $('#usuarios').DataTable({
            responsive: true,
            autoWidth: false,

            
        "language": {
            "lengthMenu": "Mostrar " +
            `<select class="custom-select custom-select-sm form-control form-control-sm">
                <option value ='10'>10</option>
                <option value ='25'>25</option>
                <option value ='50'>50</option>
                <option value ='100'>100</option>
                <option value ='-1'>All</option>
            </select>`+ 
            " registros por p&aacute;guina",
            "zeroRecords": "Nada encontrado - no digas mamas meri wey",
            "info": "Mostrando la p&aacute;gina _PAGE_ de _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtrado de _MAX_ registros totales)",
            'search': 'Buscar',
            'paginate': {
                'next':'Siguiente',
                'previous':'Anterior'
            }
        }
        });
        
    </script>
    @endsection