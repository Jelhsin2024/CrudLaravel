<?php

namespace App\Http\Controllers;

use App\Models\Carta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CartaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexx()
    {
        $cartas = Carta::latest()->get();

        return view('plato.indexo', ['cartas' => $cartas]);
    }

    public function indessx()
    {
        //
        $datos['cartas'] = Carta::paginate(15);
        //return view('welcome', $datos);
        return view('plato.index', $datos);
    }

    public function index(Request $request)
    {
        //
        //$datos['cartas'] = Carta::paginate(15);
        //return view('welcome', $datos);
        $texto = trim($request->get('texto'));
        $cartas = DB::table('cartas')
            ->select('id', 'Nombre', 'Descripcion', 'Precio', 'Tipo', 'Foto')
            ->where('Tipo', 'LIKE', '%' . $texto . '%')
            ->orwhere('Nombre', 'LIKE', '%' . $texto . '%')
            ->orderBy('Tipo', 'asc')
            ->paginate(105);
        //return view('plato.index', $datos);
        return view('plato.index', compact('cartas', 'texto'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('plato.create');
    }

    public function bebidas()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.bebidas', ['cartas' => $cartas]);
    }

    public function cervezas()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.cervezas', ['cartas' => $cartas]);
    }

    public function vinos()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.vinos', ['cartas' => $cartas]);
    }

    public function pollos()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.pollos', ['cartas' => $cartas]);
    }

    public function mariscos()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.mariscos', ['cartas' => $cartas]);
    }

    public function chifa()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.chifa', ['cartas' => $cartas]);
    }

    public function sopas()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.sopas', ['cartas' => $cartas]);
    }

    public function criolla()
    {
        //
        $cartas = Carta::latest()->get();

        return view('plato.criolla', ['cartas' => $cartas]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validador de datos por si da error
        $campos = [

            'Nombre' => 'required|string|max:100',
            'Descripcion' => 'max:200',
            'Precio' => 'required|string|max:100',
            'Tipo' => 'required|string|max:100',
            'Foto' => 'required|max:1000000|mimes:jpeg,png,jpg,mp4,m4v',

        ];



        $mensaje = [
            'required' => 'El atritubo :attribute es requerido',
            'Foto.required' => 'La foto es requerida'
        ];

        $this->validate($request, $campos, $mensaje);
        //end Validador
        //$datosEmpleado = request()->all();
        $datosCarta = request()->except('_token');

        if ($request->hasFile('Foto')) {
            $datosCarta['Foto'] = $request->file('Foto')->store('uploads', 'public');
        }
        Carta::insert($datosCarta);
        //return response()->json($datosCarta);
        return redirect('plato')->with('mensaje', 'Platillo agregado bien piola');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carta  $carta
     * @return \Illuminate\Http\Response
     */
    public function show(Carta $carta)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Carta  $carta
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $carta = Carta::findOrFail($id);
        return view('plato.edit', compact('carta'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Carta  $carta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //Validador de datos por si da error
        $campos = [

            'Nombre' => 'required|string|max:100',
            'Descripcion' => 'max:100',
            'Precio' => 'required|string|max:100',
            'Tipo' => 'required|string|max:100'


        ];

        $mensaje = [
            'required' => 'El atritubo :attribute es requerido'

        ];
        if ($request->hasFile('Foto')) {

            $campos = ['Foto' => 'required|max:1000|mimes:jpeg,png,jpg,mp4,m4v'];
            $mensaje = ['Foto.required' => 'La foto es requerida.'];
        }

        $this->validate($request, $campos, $mensaje);

        //end Validador



        $datosCarta = request()->except(['_token', '_method']);

        if ($request->hasFile('Foto')) {
            $carta = Carta::findOrFail($id);
            Storage::delete('public/' . $carta->Foto);
            $datosCarta['Foto'] = $request->file('Foto')->store('uploads', 'public');
        }

        Carta::where('id', '=', $id)->update($datosCarta);
        $carta = Carta::findOrFail($id);
        //return view('plato.edit', compact('carta'));
        return redirect('plato')->with('mensaje', 'Platillo EDITADO :D');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carta  $carta
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $carta = Carta::findOrFail($id);
        if (Storage::delete('public/' . $carta->Foto)) {
            Carta::destroy($id);
        }
        return redirect('plato')->with('mensaje', 'Platillo ELIMINADO :(');
    }
}
