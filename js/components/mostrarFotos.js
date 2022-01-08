export const galeria = ()=>{
    let mostrar = document.getElementById('mostrar-galeria')
    async function getData(){
        try {
            let galeriaHTML = '';
            let res = await fetch('https://jsonplaceholder.typicode.com/photos');
            let datos = await res.json();
            for (let i = 0; i < datos.slice(0, 4).length; i++) {
                galeriaHTML += `
                <div class="col-sm-3 mb-1">
                    <div class="card" style="width: 15rem">
                        <img src="${datos[i].thumbnailUrl}"alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${datos[i].title}</h5>
                        </div>
                    </div>
                </div>
                `;
            }
            mostrar.innerHTML = galeriaHTML;
        } catch (error) {
            alert('Error en las fotos ' + error);
        }
    }
    getData();
}