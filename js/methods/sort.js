export function sortPrecio (productos, ordenPrecioAsc) {
    return productos.sort((a, b) => {
        if (ordenPrecioAsc) {
            if (a.precio < b.precio) {
                return 1
            } else if (a.precio > b.precio) {
                return -1
            }
        } else {
            if (a.precio < b.precio) {
                return -1
            } else if (a.precio > b.precio) {
                return 1
            }
        }
    })
}

export function sortLanzamiento(productos, ordenLanzamientoAsc) {
    return productos.sort((a, b) => {
        if (ordenLanzamientoAsc) {
            if (a.añoLanzamiento < b.añoLanzamiento) {
                return 1
            } else if (a.añoLanzamiento > b.añoLanzamiento) {
                return -1
            }
        } else {
            if (a.añoLanzamiento < b.añoLanzamiento) {
                return -1
            } else if (a.añoLanzamiento > b.añoLanzamiento) {
                return 1
            }
        }
    })
}

export function sortTitutlo(productos, ordenTituloAsc) {
    return productos.sort((a, b) => {
        if (ordenTituloAsc) {
            if (a.nombre < b.nombre) {
                return 1
            } else if (a.nombre > b.nombre) {
                return -1
            }
        } else {
            if (a.nombre < b.nombre) {
                return -1
            } else if (a.nombre > b.nombre) {
                return 1
            }
        }
    })
}