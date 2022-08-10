import productos from "./methods/productos.js";
import { actualizarResultados, renderizarResultados } from "./methods/functions.js"
import { sortPrecio, sortLanzamiento, sortTitutlo } from "./methods/sort.js";

const resultadosDiv = document.getElementById('resultados');

const ordenPrecioDiv = document.getElementById('toggle-orden-precio');
const ordenLanzamientoDiv = document.getElementById('toggle-orden-lanzamiento');
const ordenTituloDiv = document.getElementById('toggle-orden-titulo')
const ordenLanzamientoDescendente = document.getElementById('orden-lanzamiento-descendente')
const ordenLanzamientoAscendente = document.getElementById('orden-lanzamiento-ascendente')
const ordenTituloDescendente = document.getElementById('orden-titulo-descendente')
const ordenTituloAscendente = document.getElementById('orden-titulo-ascendente')
const ordenPrecioDescendente = document.getElementById('orden-precio-descendente')
const ordenPrecioAscendente = document.getElementById('orden-precio-ascendente')
const buscador = document.getElementById('buscador');

ordenPrecioDiv.addEventListener('click', onClickPrecio);
ordenLanzamientoDiv.addEventListener('click', onClickLanzamiento);
ordenTituloDiv.addEventListener('click', onClickTitulo);
buscador.addEventListener('keyup', busqueda);

let ordenPrecioAsc = true;
let ordenLanzamientoAsc = true;
let ordenTituloAsc = true;

// APP start
renderizarResultados(resultadosDiv, productos);

function onClickPrecio() {
    if (ordenPrecioAsc) {
        ordenPrecioDescendente.classList.remove('asc-des')
        ordenPrecioAscendente.classList.add('asc-des')
    } else {
        ordenPrecioDescendente.classList.add('asc-des')
        ordenPrecioAscendente.classList.remove('asc-des')
    }

    const sortResult = sortPrecio(productos, ordenPrecioAsc);

    ordenPrecioAsc = !ordenPrecioAsc;
    actualizarResultados(resultadosDiv, sortResult);
}

function onClickLanzamiento() {
    if (ordenLanzamientoAsc) {
        ordenLanzamientoDescendente.classList.remove('asc-des')
        ordenLanzamientoAscendente.classList.add('asc-des')
    } else {
        ordenLanzamientoDescendente.classList.add('asc-des')
        ordenLanzamientoAscendente.classList.remove('asc-des')
    }

    const sortResult = sortLanzamiento(productos, ordenLanzamientoAsc)

    ordenLanzamientoAsc = !ordenLanzamientoAsc;
    actualizarResultados(resultadosDiv, sortResult);
}

function onClickTitulo() {
    if (ordenTituloAsc) {
        ordenTituloDescendente.classList.remove('asc-des')
        ordenTituloAscendente.classList.add('asc-des')
    } else {
        ordenTituloDescendente.classList.add('asc-des')
        ordenTituloAscendente.classList.remove('asc-des')
    }

    const sortResult = sortTitutlo(productos, ordenTituloAsc)

    ordenTituloAsc = !ordenTituloAsc;
    actualizarResultados(resultadosDiv, sortResult);
}

function busqueda() {
    let buscadorValue = buscador.value.toLowerCase();

    for (let i = 0; i < resultadosDiv.rows.length; i++) {
        let celdas = resultadosDiv.rows[i].getElementsByTagName('td')
        let found = false
        for (let e = 0; e < celdas.length && !found; e++) {
            let comparar = celdas [e].innerHTML.toLowerCase()
            if(buscadorValue.length == 0 || (comparar.indexOf(buscadorValue) > -1)) {
                found = true
            }
        }
        if (found) {
            resultadosDiv.rows[i].style.display = 'table-row'; // nunca dejarlo como un string vacio, agregarle un estilo
        } else {
            resultadosDiv.rows[i].style.display = 'none';
        }
    }
}