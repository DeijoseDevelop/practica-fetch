import { usuarios } from "./components/mostrarUsuarios.js";
import { comentarios } from "./components/mostrarComentarios.js";
import { galeria } from "./components/mostrarFotos.js";
import { navbarMostrarUsuarios } from './components/events/buttonMostrarUsuarios.js';
import { navbarMostrarComentarios } from './components/events/buttonMostrarComentarios.js';
import { navbarMostrarGaleria } from './components/events/buttonMostrarGaleria.js';

document.addEventListener('DOMContentLoaded', function(e){
    usuarios();
    comentarios();
    galeria();
    navbarMostrarUsuarios();
    navbarMostrarComentarios();
    navbarMostrarGaleria();
});