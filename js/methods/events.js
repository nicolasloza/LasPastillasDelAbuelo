import { actualizarResultados } from "./renderMethods.js";
import { sortOrden } from "./sort.js";
import productos from "./productos.js";

// TODO 1: utilizar un elemento para ordenar, rotar con CSS chevron (180)

export function onClickOrden(elemAsc, elemDesc, sortTypeName, ordenValue, ordenProp, resultadosDiv, updateStateCb) {
  if (ordenValue) {
      elemDesc.classList.remove('asc-des')
      elemAsc.classList.add('asc-des')
  } else {
      elemDesc.classList.add('asc-des')
      elemAsc.classList.remove('asc-des')
  }
  const sortResult = sortOrden(productos, ordenValue, sortTypeName);
  updateStateCb(ordenProp, !ordenValue);
  actualizarResultados(resultadosDiv, sortResult);
};

export function busqueda(buscadorElem, resultadosDiv) {
  let buscadorValue = buscadorElem.value.toLowerCase();

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