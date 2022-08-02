const resultados = document.getElementById('resultados');

/* fetchProductos()

function fetchProductos () {
    return fetch('https://mocki.io/v1/711f99d3-ed17-4a04-a0b9-f1af5785abb6')
    .then((res) => {
        const response = res.json();
        return response;
    })
    .then((resultado) => {
        productos = resultado;
        renderizarResultados(resultado);
    })
    .catch(err => console.log('No se pudo cargar la información sobre los productos'));
} */

const renderizarResultados = () => {
    
    productos.forEach((res) => {
        
        let resultadoHTML = `
            <tr>
                <td> ${res.img}</td>
                <td class="tabla-color"> ${res.nombre}</td>
                <td class="tabla-color"> ${res.añoLanzamiento}</td>
                <td class="tabla-color">$${res.precio}</td>
            </tr>
        ` 
        resultados.innerHTML += resultadoHTML
    })
}
renderizarResultados()


const actualizarResultados = () => {
    
    productos.forEach((res) => {
        
        let resultadoHTML = `
            <tr>
                <td> ${res.img}</td>
                <td class="tabla-color"> ${res.nombre}</td>
                <td class="tabla-color"> ${res.añoLanzamiento}</td>
                <td class="tabla-color">$${res.precio}</td>
            </tr>
        ` 
        resultados.innerHTML = resultadoHTML
    })
    console.log('3',productos)

}




/* function buscadorInput() {

    const inputValue = document.getElementById('buscador')

    const filtradoPorTexto = resultados.filter((element) => {
        return element.nombre.includes(inputValue)
    })
    
    renderizarResultados(filtradoPorTexto)
} */


/*   const ordenPrecio = document.getElementById('orden-precio').onclick = function() {
    productos.sort( function ordenDiscoPrecio(a, b) {
    
        if(a.precio < b.precio) {
            return -1
        } 
        
        if (a.precio > b.precio) {
            return 1
        } 
        
        console.log(productos.sort())
        return 0
          
    })
} */

const ordenPrecio = document.getElementById('orden-precio')
const ordenLanzamiento = document.getElementById('orden-lanzamiento')
const ordenTitulo = document.getElementById('orden-titulo')

ordenPrecio.addEventListener('click', () => {
    // productos.sort((a,b) => {

    //     if (a.precio < b.precio) {
    //         return -1
    //     }
    
    //     if (a.precio > b.precio) {
    //         return 1
    //     }
    //     return 0
    // })

    productos.sort((a, b) => {
        if (a.precio === b.precio) {
            return 0
        }

        if (a.precio > b.precio) {
            return -1
        }
        return 1
    })
    console.log('1',productos)
    actualizarResultados()
    console.log('2',productos)
})

ordenLanzamiento.addEventListener('click', () => {
    productos.sort((a,b) => {

        if (a.añoLanzamiento < b.añoLanzamiento) {
            return -1
        }
    
        if (a.añoLanzamiento > b.añoLanzamiento) {
            return 1
        }
        return 0
    })

    // productos.sort((a, b) => {
    //     if (a.añoLanzamiento === b.añoLanzamiento) {
    //         return 0
    //     }

    //     if (a.añoLanzamiento > b.añoLanzamiento) {
    //         return -1
    //     }
    //     return 1
    // })

    console.log(productos)
})

ordenTitulo.addEventListener('click', () => {
    productos.sort((a,b) => { 

        if (a.nombre == b.nombre) {
            return 0;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 1;
    })

    console.log(productos)

})


/* productos.sort((a,b) => {
    
    if (a.añoLanzamiento < b.añoLanzamiento) {
        return -1
    }

    if (a.añoLanzamiento > b.añoLanzamiento) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }

    if (a.precio > b.precio) {
        return 1
    }

    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1
    }

    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1
    }
    console.log('productos', productos)
    return 0

})
console.log(productos) */


/* function onNameFilter() {

    const inputValue = document.getElementById('buscador').value; // averiguar

    const filteredByText = resultados.filter(elem => {
        return elem.name.includes(inputValue);
    });

    renderizarResultados(filteredByText);
} */






// filter
// sort

// map

/* const renderizarResultados = (resultados) => {
resultados.forEach((elem) => {

})

resultDiv.appendChild(discoRow);
} */

/* const rowTemplate = `<p>Nombre: ${disco.name} precio: ${disco.precio}</p>`;


const discosEntries = discos.forEach((disco) => {
const discoRow = `
  <p>Nombre: ${disco.name} precio: ${disco.precio}</p>
`;
resultDiv.appendChild(discoRow);
})
 */