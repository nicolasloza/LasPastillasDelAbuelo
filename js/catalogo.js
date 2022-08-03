let productos = [
    {
        "id": 1,
        "nombre": "2020",
        "img":"../multimedia/images/catalogo/products/2020.jpg",
        "precio": 1300,
        "añoLanzamiento": "2020", 
        "cantidad": 1,
        "link": "../pages/discografia.html#veinte-cd"
    },
    {
        "id": 2,
        "nombre": "Locura y Realidad",
        "img": "../multimedia/images/catalogo/products/locura-y-realidad.jpg",
        "precio": 2300,
        "añoLanzamiento": "2017", 
        "cantidad": 1,
        "link": "../pages/discografia.html#vivo-de-pastillas"
    },
    {
        "id": 3,
        "nombre": "Paradojas",
        "img": "../multimedia/images/catalogo/products/paradojas.jpg",
        "precio": 1700,
        "añoLanzamiento": "2015", 
        "cantidad": 1,
        "link": "../pages/discografia.html#paradojas"
    },
    {
        "id": 4,
        "nombre": "El Barrio en sus Puños",
        "img": "../multimedia/images/catalogo/products/elbarrio.jpg",
        "precio": 1400,
        "añoLanzamiento": "2014", 
        "cantidad": 1,
        "link": "../pages/discografia.html#el-barrio"
    },
    {
        "id": 5,
        "nombre": "10 años",
        "img": "../multimedia/images/catalogo/products/10.jpg",
        "precio": 1250,
        "añoLanzamiento": "2013                                                                                                                                                             ", 
        "cantidad": 1,
        "link": "../pages/discografia.html#diez-años"
    },
    {
        "id": 6,
        "nombre": "Kermesse",
        "img": "../multimedia/images/catalogo/products/Kermesse.jpg",
        "precio": 1200,
        "añoLanzamiento": "2012", 
        "cantidad": 1,
        "link": "../pages/discografia.html#kermesse"
    },
    {
        "id": 7,
        "nombre": "Desafios",
        "img": "../multimedia/images/catalogo/products/desafios.jpg",
        "precio": 1400,
        "añoLanzamiento": "2011", 
        "cantidad": 1,
        "link": "../pages/discografia.html#desafios"
    },
    {
        "id": 8,
        "nombre": "Versiones",
        "img": "../multimedia/images/catalogo/products/versiones.jpg",
        "precio": 2500,
        "añoLanzamiento": "2010", 
        "cantidad": 1,
        "link": "../pages/discografia.html#versiones"
    },
    {
        "id": 9,
        "nombre": "Crisis",
        "img": "../multimedia/images/catalogo/products/crisis.jpg",
        "precio": 1450,
        "añoLanzamiento": "2008", 
        "cantidad": 1,
        "link": "../pages/discografia.html#crisis"
    },
    {
        "id": 10,
        "nombre": "Las Pastillas del Abuelo",
        "img": "../multimedia/images/catalogo/products/discorojo.jpg",
        "precio": 1350,
        "añoLanzamiento": "2006", 
        "cantidad": 1,
        "link": "../pages/discografia.html#disco-rojo"
    },
    {
        "id": 11,
        "nombre": "Por Colectora",
        "img": "../multimedia/images/catalogo/products/por-colectora.jpg",
        "precio": 1600,
        "añoLanzamiento": "2005", 
        "cantidad": 1,
        "link": "../pages/discografia.html#por-colectora"
    }
]


const resultados = document.getElementById('resultados');

const ordenPrecioDescendente = document.getElementById('orden-precio-descendente')
const ordenPrecioAscendente = document.getElementById('orden-precio-ascendente')

const ordenLanzamientoDescendente = document.getElementById('orden-lanzamiento-descendente')
const ordenLanzamientoAscendente = document.getElementById('orden-lanzamiento-ascendente')

const ordenTituloDescendente = document.getElementById('orden-titulo-descendente')
const ordenTituloAscendente = document.getElementById('orden-titulo-ascendente')



const renderizarResultados = () => {
    
    productos.forEach((res) => {
        
        let resultadoHTML = `
            <tr>
                <td> <img class="img-disco" src="${res.img}"></td>
                <td class="tabla-color"><a href="${res.link}" target="_blank">${res.nombre}</a></td>
                <td class="tabla-color">${res.añoLanzamiento}</td>
                <td class="tabla-color">$${res.precio}</td>
            </tr>
        ` 
        resultados.innerHTML += resultadoHTML
    })
}
renderizarResultados()


const actualizarResultados = () => {
    
    productos.forEach((res) => {
        
        let actualizadoHTML = `
            <tr>
                <td> <img class="img-disco" src="${res.img}"></td>
                <td class="tabla-color"> ${res.nombre}</td>
                <td class="tabla-color"> ${res.añoLanzamiento}</td>
                <td class="tabla-color">$${res.precio}</td>
            </tr>
        ` 
        resultados.innerHTML = actualizadoHTML
    })
}

function busqueda() {
    let buscador = document.getElementById('buscador').value.toLowerCase()

    for (let i = 0; i < resultados.rows.length; i++) {
        let celdas = resultados.rows[i].getElementsByTagName('td')
        let found = false
        for (let e = 0; e < celdas.length && !found; e++) {
            let comparar = celdas [e].innerHTML.toLowerCase()
            if(buscador.length == 0 || (comparar.indexOf(buscador) > -1)) {
                found = true
            }
        }
        if (found) {
            resultados.rows[i].style.display = ''
        } else {
            resultados.rows[i].style.display = 'none'
        }
    }
}


ordenPrecioDescendente.addEventListener('click', () => {

    ordenPrecioDescendente.classList.add('asc-des')
    ordenPrecioAscendente.classList.remove('asc-des')

    productos.sort((a,b) => {

        if (a.precio < b.precio) {
            return -1
        } else if (a.precio > b.precio) {
            return 1
        }
    })
    console.log(productos)
    actualizarResultados()
})

ordenPrecioAscendente.addEventListener('click', () => {

    ordenPrecioDescendente.classList.remove('asc-des')
    ordenPrecioAscendente.classList.add('asc-des')

    productos.sort((a, b) => {
        if (a.precio === b.precio) {
            return 0
        } else if (a.precio > b.precio) {
            return -1
        }
    })
    console.log(productos)
    actualizarResultados()
})


ordenLanzamientoDescendente.addEventListener('click', () => {

    ordenLanzamientoDescendente.classList.add('asc-des')
    ordenLanzamientoAscendente.classList.remove('asc-des')

    productos.sort((a,b) => {

        if (a.añoLanzamiento < b.añoLanzamiento) {
            return -1
        } else if (a.añoLanzamiento > b.añoLanzamiento) {
            return 1
        }
    })
    console.log(productos)
    actualizarResultados()
})

ordenLanzamientoAscendente.addEventListener('click', () => {

    ordenLanzamientoDescendente.classList.remove('asc-des')
    ordenLanzamientoAscendente.classList.add('asc-des')

    productos.sort((a, b) => {
        if (a.añoLanzamiento === b.añoLanzamiento) {
            return 0
        } else if (a.añoLanzamiento > b.añoLanzamiento) {
            return -1
        }
    })
    console.log(productos)
    actualizarResultados()
})


ordenTituloAscendente.addEventListener('click', () => {

    ordenTituloDescendente.classList.remove('asc-des')
    ordenTituloAscendente.classList.add('asc-des')

    productos.sort((a,b) => { 

        if (a.nombre == b.nombre) {
            return 0;
        } else if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 1;
        }
    })
    console.log(productos)
    actualizarResultados()

})

ordenTituloDescendente.addEventListener('click', () => {

    ordenTituloDescendente.classList.add('asc-des')
    ordenTituloAscendente.classList.remove('asc-des')

    productos.sort((a,b) => { 

        if (a.nombre < b.nombre) {
            return 1;
        } else if (a.nombre > b.nombre) {
            return -1;
        }
    })
    console.log(productos)
    actualizarResultados()

})


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