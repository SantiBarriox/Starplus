import { añadirPeliculasSerie, editarPeliculasSeries } from "./abm.js";
import { cargarTabla, estaEditando } from "./adminUtils.js";
import { validartipo, validarCaratula, validarDescripcion, validarNombre, validarPublicada, validarDuracion, validarCategoria } from "./validators.js";

const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"))
if(!estaLogueado){

    window.location.href = "../pages/login.html"
}


cargarTabla();


const form = document.getElementById("form-Peli-Series");
const campoNombre = document.getElementById("input-nombre");
const campoTipo = document.getElementById("input-tipo");
const campoDuracion = document.getElementById("input-duracion");
const campoPublicada = document.getElementById("input-publicada");
const campoCaratula = document.getElementById("input-caratula");
const campoDescripcion = document.getElementById("input-descripcion");
const selectCategoria = document.getElementById("categoria")


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
selectCategoria.addEventListener('blur', (e) => {
   const value = e.target.value;
   validarCategoria(value, selectCategoria)
})

form.addEventListener("submit", (e)=>{
       e.preventDefault();
       
      const nombre = campoNombre.value;
      const tipo = campoTipo.value;
      const duracion = campoDuracion.value;
      const publicada = campoPublicada.value;
      const caratula = campoCaratula.value;
      const descripcion = campoDescripcion.value;
      const categoria = selectCategoria.value;


       if (validarNombre(nombre, campoNombre) && 
       validartipo(tipo, campoTipo) && 
       validarDuracion(duracion, campoDuracion) && 
       validarPublicada(publicada,campoPublicada) && 
       validarDescripcion(descripcion,campoDescripcion) && 
       validarCaratula(caratula,campoCaratula)) {

         if(estaEditando()){
            editarPeliculasSeries(nombre,tipo,duracion,caratula,descripcion,publicada,categoria);  
            
         } else {
            
            añadirPeliculasSerie(nombre, tipo, duracion, caratula, descripcion, publicada,categoria);
         }

            cargarTabla()
            form.reset()

      campoNombre.classList.remove("is-valid","is-invalid")
      campoTipo.classList.remove("is-valid","is-invalid")
      campoDuracion.classList.remove("is-valid","is-invalid")
      campoPublicada.classList.remove("is-valid","is-invalid")
      campoDescripcion.classList.remove("is-valid","is-invalid")
      campoCaratula.classList.remove("is-valid","is-invalid")
   }
})