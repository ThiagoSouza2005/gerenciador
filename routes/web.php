<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/taskmind", function () { 
    return Inertia::render("Gerenciador"); 
})->name('taskmind');



Route::get('/create', function(){
    return Inertia::render("Create");
})->name("create");

Route::get('/planilha', function(){
    return Inertia::render("Create");
})->name("create");

Route::get("/editar", function(){

    return Inertia::render("Editar");
}
)->name("editar");



Route::get('/planilha',[TaskController::class,'index'])->name('listagem');


Route::get('/planilha-adicionar',[TaskController::class,'adicionar'])->name('planilha-adicionar');
Route::get( '/planilha-excluir',[TaskController::class,'destroy'])->name('planilha-excluir');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
