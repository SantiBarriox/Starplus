


import { añadirCategorias, editarCategorias } from "./abmCategoria.js";
import { estaEditandoCat, tablaCat } from "./adminUtils.js";
import { validarNombre } from "./validators.js";
// cargar tablas
tablaCat()


// seleccionar elemento
const formCategoria = document.getElementById("form-categoria");
const campoCategoria = document.getElementById("input-categoria");

// 3 evet listener
campoCategoria.addEventListener("blur",(e)=>{
    const valor = e.target.value;
   
    validarNombre(valor, campoCategoria)
   
      
   });
// 3 evet listener form

   formCategoria.addEventListener("submit", (e)=>{
    // Siempre lleva primero e.preventDefault() para que la pagina no se actualice
        e.preventDefault();
        
       const nombre = campoCategoria.value;
       
 
 
 
 
        if ( validarNombre(nombre, campoCategoria)) {
 

            if (estaEditandoCat()){
                editarCategorias(nombre)
            } else {
                 añadirCategorias(nombre)
            }

   
      

    //   recargar tabla
      tablaCat()

      formCategoria.reset()
       // resetear clases
    campoCategoria.classList.remove("is-valid","is-invalid")
        
      
    }
 })