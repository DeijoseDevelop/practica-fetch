export const navbarMostrarComentarios = ()=>{
    let btn = document.getElementById('comentario');
    let listado = document.querySelector('.listado-comentarios');
    let listadoF = document.querySelector('.listado-fotos');
    let listadoU = document.querySelector('.listado-usuarios');
    btn.addEventListener('click', (e)=>{
        listado.classList.toggle('d-none');
        if(listadoU.classList.contains('d-none') === false || listadoF.classList.contains('d-none') === false){
            listadoU.classList.add('d-none');
            listadoF.classList.add('d-none');
        }
    });
}