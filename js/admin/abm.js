import { PeliculaSeries } from "./PeliculasSeries.js";
import { agregarPeliculasOSeriesALS, cargarTabla, obtenerPeliculasOSeriesDeLS } from "./adminUtils.js";


export const añadirPeliculasSerie = (nombre, tipo, duracion, caratula, descripcion, publicada) =>{
    const nuevaPOS = new PeliculaSeries (nombre, tipo, duracion, caratula, descripcion, publicada)

agregarPeliculasOSeriesALS(nuevaPOS);

    swal.fire({
        title:"Exito",
        text: "Se guardo de manera exitosa",
        icon:"success",
    })
};

 


export const editarPeliculasSeries = (nombre, tipo, duracion, caratula, descripcion, publicada) =>{
    // traer lista y el codigo 
const codigo = sessionStorage.getItem("codigoPeliculaOSerie")
const peliculaOSerie = obtenerPeliculasOSeriesDeLS();
// si no hay codigo es null
if(!codigo){
    swal.fire({
        title: "Error",
        text:"No se encontro",
        icon: "Error",
    })
    return;
} 
// bucar pelicula
const posicionpeliculaOSerie = peliculaOSerie.findIndex(
    (item)=>item.codigo === codigo
    );
if(posicionpeliculaOSerie === -1){
    swal.fire({
        title: "Error",
        text:"No se encontro",
        icon: "Error",
    })
}
// crear el editado
const pelicilaOSerieEditada = new PeliculaSeries(nombre,tipo,duracion,caratula,descripcion,publicada)
// eliminar el anterior y agregar el nuevo
peliculaOSerie.splice(posicionpeliculaOSerie,1,pelicilaOSerieEditada)
// guardar en el ls

localStorage.setItem("peliculasSeries", JSON.stringify(peliculaOSerie))
swal.fire({
    title: "Exito",
    text:"Se modifico con exito",
    icon: "success",
})

// resetear estado previo a edicion

sessionStorage.removeItem("codigoPeliculaOSerie")
}


export const eliminarPeliculasSerie = (codigo) => {
//    confirmar
swal
.fire({
    title:"¿Estas seguro?",
    text:"Esta opción no será reversible",
    icon:"warning",
    showCancelButton: true,
    cancelButtonText:"Cancelar",
    confirmButtonText:"Si, eliminar",
    })
    .then((action)=>{
        if(action.isConfirmed){
            
            // trer lista
            const peliculaOSerie = obtenerPeliculasOSeriesDeLS();

            const listaFiltrada = peliculaOSerie.filter(
                (item)=>item.codigo !== codigo
                );
                localStorage.setItem("peliculasSeries", JSON.stringify(listaFiltrada))

                swal.fire({
                    title: "Exito",
                    text:"Se elimino con exito",
                    icon: "success",
                })
                // recargar tabla
                cargarTabla();

        } 
    });
}

// detacar peliculas

export const destacarPeliculasSerie = (codigo)=>{
 const peliculaOSerie = obtenerPeliculasOSeriesDeLS()

 const indexPelicula = peliculaOSerie.findIndex((item)=>{
    return item.codigo === codigo;
 })
 if (indexPelicula === -1) {
    console.error("Hubo un error");
    return;
  }
  peliculaOSerie.forEach((_, index) => {
    peliculaOSerie[index].destacada = false;
  });
  peliculaOSerie[indexPelicula].destacada = !peliculaOSerie[indexPelicula].destacada;
  localStorage.setItem("peliculaOSerie", JSON.stringify(peliculaOSerie));
  swal
.fire({
    title:"Exito",
    text:"Se destaco la pelicula",
    icon:"success",
    })
}

// muestra la pelicula

const mostrarPeliculaDestacada = (codigo) => {

}