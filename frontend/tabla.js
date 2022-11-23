var contenido = document.getElementById("contenido")

fetch('http://127.0.0.1:8000/api/asignatura')
    .then(datos => datos.json())
    .then(datos => {
        //console.log(datos)
        tabla(datos)
    })
function tabla(datos) {
   
    for (let valor of datos) {
        console.log(valor.nombre)
        contenido.innerHTML += `
            <tr>
                <th scope="row">${valor.id}</th>
                <td>${valor.nombre}</td>
                <td>${valor.cantCredito}</td>
                <td>${valor.intensidad}</td>
                <td>${valor.carrera}</td>
              </tr>
        `
    }
}