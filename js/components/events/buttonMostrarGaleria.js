export const navbarMostrarGaleria = ()=>{
    let btn = document.getElementById('galeria');
    let listado = document.querySelector('.listado-fotos');
    let listadoU = document.querySelector('.listado-usuarios');
    let listadoC = document.querySelector('.listado-comentarios');
    btn.addEventListener('click', (e)=>{
        listado.classList.toggle('d-none');
        if(listadoC.classList.contains('d-none') === false || listadoU.classList.contains('d-none') === false){
            listadoC.classList.add('d-none');
            listadoU.classList.add('d-none');
        }
    });
}