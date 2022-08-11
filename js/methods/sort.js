export function sortOrden(productos, ordenAsc, propName) {
    return productos.sort((a, b) => {
        if (ordenAsc) {
            if (a[propName] < b[propName]) {
                return 1
            } else if (a[propName] > b[propName]) {
                return -1
            }
        } else {
            if (a[propName] < b[propName]) {
                return -1
            } else if (a[propName] > b[propName]) {
                return 1
            }
        }
    })
}
