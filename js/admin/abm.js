'use strict'

import { PeliculaSeries } from "./PeliculasSeries.js";
import { agregarPeliculasOSeriesALS, cargarTabla, obtenerPeliculasOSeriesDeLS } from "./adminUtils.js";


export const añadirPeliculasSerie = (nombre, tipo, duracion, caratula, descripcion, publicada) =>{
    const nuevaPOS = new PeliculaSeries (nombre, tipo, duracion, caratula, descripcion, publicada)

agregarPeliculasOSeriesALS(nuevaPOS);

    swal.fire({
        title:"Éxito",
        text: "Se guardó de manera exitosa",
        icon:"success",
    })
};

export const editarPeliculasSeries = (nombre, tipo, duracion, caratula, descripcion, publicada) =>{

const codigo = sessionStorage.getItem("codigoPeliculaOSerie")
const peliculaOSerie = obtenerPeliculasOSeriesDeLS();

if(!codigo){
    swal.fire({
        title: "Error",
        text:"No se encontró",
        icon: "Error",
    })
    return;
} 

const posicionPeliculaOSerie = peliculaOSerie.findIndex(
    (item)=>item.codigo === codigo
    );
if(posicionPeliculaOSerie === -1){
    swal.fire({
        title: "Error",
        text:"No se ha encontró",
        icon: "Error",
    })
}

const peliculaOSerieEditada = new PeliculaSeries(nombre,tipo,duracion,caratula,descripcion,publicada)

peliculaOSerie.splice(posicionPeliculaOSerie,1,peliculaOSerieEditada);

localStorage.setItem("peliculasSeries", JSON.stringify(peliculaOSerie))
swal.fire({
    title: "Éxito",
    text:"Se modificó con éxito",
    icon: "success",
})


sessionStorage.removeItem("codigoPeliculaOSerie")
}


export const eliminarPeliculasSerie = (codigo) => {

swal
.fire({
    title:"¿Estás seguro?",
    text:"Esta opción no será reversible",
    icon:"warning",
    showCancelButton: true,
    cancelButtonText:"Cancelar",
    confirmButtonText:"Sí, eliminar",
    })
    .then((action)=>{
        if(action.isConfirmed){
            
           
            const peliculaOSerie = obtenerPeliculasOSeriesDeLS();

            const listaFiltrada = peliculaOSerie.filter(
                (item)=>item.codigo !== codigo
                );
                localStorage.setItem("peliculasSeries", JSON.stringify(listaFiltrada))

                swal.fire({
                    title: "Éxito",
                    text:"Se eliminó con éxito",
                    icon: "success",
                })
                
                cargarTabla();

        } 
    });
}