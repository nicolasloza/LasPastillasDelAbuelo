export function renderizarResultados (elemento, productos) {

    productos.forEach((res) => {
        
        let resultadoHTML = `
        <tr>
            <td> <img class="img-disco" src="${res.img}"></td>
            <td class="tabla-color"><a href="${res.link}" target="_blank">${res.nombre}</a></td>
            <td class="tabla-color">${res.añoLanzamiento}</td>
            <td class="tabla-color">$${res.precio}</td>
        </tr>
        ` 
        elemento.innerHTML += resultadoHTML
    })
}

export function actualizarResultados (elemento, productos) {
    elemento.innerHTML = '';
    
    productos.forEach((res) => {
        
        let actualizadoHTML = `
            <tr>
                <td> <img class="img-disco" src="${res.img}"></td>
                <td class="tabla-color"><a href="${res.link}" target="_blank">${res.nombre}</a></td>
                <td class="tabla-color">${res.añoLanzamiento}</td>
                <td class="tabla-color">$${res.precio}</td>
            </tr>
        ` 
        elemento.innerHTML += actualizadoHTML
    })
}


