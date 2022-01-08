export const comentarios = ()=>{
    let mostrar = document.getElementById('mostrar-comentarios');
    async function getData(){
      try {
        let comentariosHTML = '';
        let res = await fetch('https://jsonplaceholder.typicode.com/comments');
        let datos = await res.json();
        for (let i = 0; i < datos.slice(0, 10).length; i++) {
            comentariosHTML += `
            <div class="col-sm-3 mb-1">
              <div class="card" style="width: 15rem">
                <div class="card-body">
                  <h5 class="card-title">${datos[i].name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${datos[i].email}</h6>
                  <p class="card-text"> ${datos[i].body}</p>
                </div>
              </div>
            </div>`;
        }
        mostrar.innerHTML = comentariosHTML;
      } catch (error) {
        alert('Error en lo comentarios ' + error);
      }
    }
    getData();
}