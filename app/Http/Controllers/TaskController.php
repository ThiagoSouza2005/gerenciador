<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{

  
  public function index(){
    $tarefa = Task::all();

    return Inertia::render('Listagem', [
   
        'listaTarefas'=> $tarefa,
        
    ]);
 }
     public function create()
        {
            return Inertia::render('Create');
        }
        public function adicionar (Request $request){
            $task = $request->tarefa;
            $desc = $request->descricao;

            if ($task && $desc) {
                Task::create([
                    'titulo' => $task,
                    'descricao' => $desc,

                ]);
                $tarefa = Task::all();

                return response()->json([ 'data'=> $tarefa ]);
            }   

    }
 
 public function destroy (Request $resquest){

    $id = $resquest->id;
    $tarefa = Task::find($id);
    if ($tarefa) {
        $tarefa->delete();

 }

 return response()->json(['data'=> Task::all() ]);
}
}