export const usuarios = ()=>{
    let mostrarDatos = document.getElementById('mostrar-usuarios');
    async function getData(){
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let datos = await res.json();
            let datosHTML = '';
            for(let usuarios of datos){
                datosHTML +=  `
                <tr>
                    <th scope="row">${usuarios.id}</th>
                    <td>${usuarios.name}</td>
                    <td>${usuarios.username}</td>
                    <td>${usuarios.email}</td>
                    <td>${usuarios.phone}</td>
                    <td>${usuarios.website}</td>
                    <td>${usuarios.address.street}</td>
                    <td>${usuarios.company.name}</td>
                </tr>
            `;
            }
            mostrarDatos.innerHTML = datosHTML;
        } catch (error) {
            alert('Error en los usuarios ' + error);
        }
    }
    getData();
}