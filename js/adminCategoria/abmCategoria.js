import { Categorias } from "./Categoria.js"
import { agregarCategoriaALS, obtenerCategoriaDeLS, tablaCat } from "./adminUtils.js"

export const añadirCategorias = (nombre)=>{
    const nuevaCategoria = new Categorias(nombre)
       
    agregarCategoriaALS(nuevaCategoria)

    swal.fire({
        title:"Exito",
        text:"Categoria agregada",
        icon:"success",
    })
  
}





export const editarCategorias = (nombre) => {
    // traer lista y el codigo 
    const codigo = sessionStorage.getItem("codigoCategoria")
    const categorias = obtenerCategoriaDeLS();
    
    // si no hay codigo es null
    if (!codigo) {
        swal.fire({
            title: "Error",
            text: "No se encontró el código de categoría para editar",
            icon: "error",
        });
        return;
    } 
    
    // buscar la categoría a editar
    const posicionCategoria = categorias.findIndex((item) => item.codigo === codigo);
    
    if (posicionCategoria === -1) {
        swal.fire({
            title: "Error",
            text: "No se encontró la categoría para editar",
            icon: "error",
        });
        return;
    }
    
    // Crear la categoría editada
    const categoriaEditada = new Categorias(nombre);
    
    // Eliminar la categoría anterior y agregar la nueva
    categorias.splice(posicionCategoria, 1, categoriaEditada);
    
    // Guardar en el localStorage
    localStorage.setItem("categorias", JSON.stringify(categorias));
    tablaCat();
    swal.fire({
        title: "Éxito",
        text: "La categoría se modificó con éxito",
        icon: "success",
    });
    
    // Resetear estado previo a edición
    sessionStorage.removeItem("codigoCategoria");
};







export const eliminarCategorias = (codigo) => {
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
                const categorias = obtenerCategoriaDeLS();
    
                const listaFiltrada = categorias.filter(
                    (item)=>item.codigo !== codigo
                    );
                    localStorage.setItem("categorias", JSON.stringify(listaFiltrada))
    
                    swal.fire({
                        title: "Exito",
                        text:"Se elimino con exito",
                        icon: "success",
                    })
                    // recargar tabla
                    tablaCat()
    
            } 
        });
    }