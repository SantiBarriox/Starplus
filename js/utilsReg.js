'use strict'

export const obtenerContactosDeLS = () => {
    return JSON.parse(localStorage.getItem('contactos')) || [];
}

export const ordenarLista = (lista) => {
    return lista.sort((a,b) => {
        if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
}