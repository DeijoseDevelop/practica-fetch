import { usuarios } from "./components/mostrarUsuarios.js";
import { comentarios } from "./components/mostrarComentarios.js";
import { galeria } from "./components/mostrarFotos.js";

document.addEventListener('DOMContentLoaded', function(e){
    usuarios();
    comentarios();
    galeria();
});