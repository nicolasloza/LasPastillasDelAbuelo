import productos from "./methods/productos.js";
import { renderizarResultados as renderInitialResults } from "./methods/renderMethods.js";
import { onClickOrden, busqueda } from "./methods/events.js";
import { ordenState, updateState } from "./state.js";

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

const onClickPrecio = () => onClickOrden(ordenPrecioAscendente, ordenPrecioDescendente, 'precio', ordenState.ordenPrecioAsc, 'ordenPrecioAsc', resultadosDiv, updateState);
const onClickLanzamiento = () => onClickOrden(ordenLanzamientoAscendente, ordenLanzamientoDescendente, 'añoLanzamiento', ordenState.ordenLanzamientoAsc, 'ordenLanzamientoAsc', resultadosDiv, updateState);
const onClickTitulo = () => onClickOrden(ordenTituloAscendente, ordenTituloDescendente, 'nombre', ordenState.ordenTituloAsc, 'ordenTituloAsc', resultadosDiv, updateState);
const onSearch = () => busqueda(buscador, resultadosDiv);

ordenPrecioDiv.addEventListener('click', onClickPrecio);
ordenLanzamientoDiv.addEventListener('click', onClickLanzamiento);
ordenTituloDiv.addEventListener('click', onClickTitulo);

buscador.addEventListener('keyup', onSearch);

// APP start
renderInitialResults(resultadosDiv, productos);
