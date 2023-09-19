import { Categorias } from "./Categoria.js"
import { agregarCategoriaALS, obtenerCategoriaDeLS, tablaCat } from "./adminUtils.js"

export const añadirCategorias = (nombre)=>{
    const nuevaCategoria = new Categorias(nombre)
       
    agregarCategoriaALS(nuevaCategoria)

    swal.fire({
        title:"Éxito",
        text:"La categoría ha sido agregada",
        icon:"success",
    })
}

export const editarCategorias = (nombre) => {
    const codigo = sessionStorage.getItem("codigoCategoria")
    const categorias = obtenerCategoriaDeLS();
    
    if (!codigo) {
        swal.fire({
            title: "Error",
            text: "No se encontró el código de categoría para editar",
            icon: "error",
        });
        return;
    } 
    
    const posicionCategoria = categorias.findIndex((item) => item.codigo === codigo);
    
    if (posicionCategoria === -1) {
        swal.fire({
            title: "Error",
            text: "No se encontró la categoría para editar",
            icon: "error",
        });
        return;
    }
    
    const categoriaEditada = new Categorias(nombre);
    
    categorias.splice(posicionCategoria, 1, categoriaEditada);
    
    localStorage.setItem("categorias", JSON.stringify(categorias));
    tablaCat();
    swal.fire({
        title: "Éxito",
        text: "La categoría se modificó con éxito",
        icon: "success",
    });
    
    sessionStorage.removeItem("codigoCategoria");
};


export const eliminarCategorias = (codigo) => {
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
                
                const categorias = obtenerCategoriaDeLS();
    
                const listaFiltrada = categorias.filter(
                    (item)=>item.codigo !== codigo
                    );
                    localStorage.setItem("categorias", JSON.stringify(listaFiltrada))
    
                    swal.fire({
                        title: "Éxito",
                        text:"La categoría se ha eliminado",
                        icon: "success",
                    })
                    tablaCat()
    
            } 
        });
    }