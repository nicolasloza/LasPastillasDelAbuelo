// estado de applicacion, appState
export const ordenState = {
  ordenPrecioAsc: true,
  ordenLanzamientoAsc: true,
  ordenTituloAsc: true,
};

export function updateState(prop, value) {
  ordenState[prop] = value;
};