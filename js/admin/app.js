import { añadirPeliculasSerie, editarPeliculasSeries } from "./abm.js";
import { cargarTabla, estaEditando } from "./adminUtils.js";
import { validartipo, validarCaratula, validarDescripcion, validarNombre, validarPublicada, validarDuracion } from "./validators.js";

// Proteger ruta 
const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"))
if(!estaLogueado){

    window.location.href = "./ingresar.html"
}


// 1 cargar datos en la tabla
cargarTabla();

// seleccionar elemento


const form = document.getElementById("form-Peli-Series");
const campoNombre = document.getElementById("input-nombre");
const campoTipo = document.getElementById("input-tipo");
const campoDuracion = document.getElementById("input-duracion");
const campoPublicada = document.getElementById("input-publicada");
const campoCaratula = document.getElementById("input-caratula");
const campoDescripcion = document.getElementById("input-descripcion");

// 3 evet listener

campoNombre.addEventListener("blur",(e)=>{
 const valor = e.target.value;

 validarNombre(valor, campoNombre)

   
});
campoTipo.addEventListener("blur",(e)=>{
 const valor = e.target.value;

  validartipo(valor, campoTipo)
   
 
   
});
campoDuracion.addEventListener("blur", (e)=>{
   const valor = e.target.value;

   validarDuracion(valor, campoDuracion)
   
  
    
});
campoPublicada.addEventListener("blur",(e)=>{
 const valor = e.target.value;

  validarPublicada(valor, campoPublicada)
  
   
});
campoCaratula.addEventListener("blur",(e)=>{
 const valor = e.target.value;

 validarCaratula(valor, campoCaratula)
  
   
});
campoDescripcion.addEventListener("blur",(e)=>{
 const valor = e.target.value;

 validarDescripcion(valor, campoDescripcion)
   
});


// 4 event listener del form
form.addEventListener("submit", (e)=>{
   // Siempre lleva primero e.preventDefault() para que la pagina no se actualice
       e.preventDefault();
       
      const nombre = campoNombre.value;
      const tipo = campoTipo.value;
      const duracion = campoDuracion.value;
      const publicada = campoPublicada.value;
      const caratula = campoCaratula.value;
      const descripcion = campoDescripcion.value;




       if (validarNombre(nombre, campoNombre) && 
       validartipo(tipo, campoTipo) && 
       validarDuracion(duracion, campoDuracion) && 
       validarPublicada(publicada,campoPublicada) && 
       validarDescripcion(descripcion,campoDescripcion) && 
       validarCaratula(caratula,campoCaratula)) {

         if(estaEditando()){
            editarPeliculasSeries(nombre, tipo, duracion, caratula, descripcion, publicada);  
            
         } else {
            
            añadirPeliculasSerie(nombre, tipo, duracion, caratula, descripcion, publicada);
         }

      
      // recargar tabla
      cargarTabla()
      // vaciar campos
      form.reset()

      // resetear clases
      campoNombre.classList.remove("is-valid","is-invalid")
      campoTipo.classList.remove("is-valid","is-invalid")
      campoDuracion.classList.remove("is-valid","is-invalid")
      campoPublicada.classList.remove("is-valid","is-invalid")
      campoDescripcion.classList.remove("is-valid","is-invalid")
      campoCaratula.classList.remove("is-valid","is-invalid")
      
   }
})