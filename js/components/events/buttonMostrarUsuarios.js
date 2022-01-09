export const navbarMostrarUsuarios = ()=>{
    let btn = document.getElementById('usuario');
    let listado = document.querySelector('.listado-usuarios');
    let listadoC = document.querySelector('.listado-comentarios');
    let listadoF = document.querySelector('.listado-fotos');
    btn.addEventListener('click', (e)=>{
        listado.classList.toggle('d-none');
        if(listadoC.classList.contains('d-none') === false || listadoF.classList.contains('d-none') === false){
            listadoC.classList.add('d-none');
            listadoF.classList.add('d-none');
        }
    });
}