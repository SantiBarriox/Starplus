import { eliminarCategorias } from "./abmCategoria.js";

export const obtenerCategoriaDeLS = ()=>{
    return JSON.parse(localStorage.getItem("categorias")) ||[];
}


export const agregarCategoriaALS = (nuevaCategoria)=>{
    const categorias = obtenerCategoriaDeLS()

    categorias.push(nuevaCategoria)
 
        localStorage.setItem("categorias",JSON.stringify(categorias))
}
export const crearFilaTablaCat = (categoria,indice) =>{
    const tbody =document.getElementById("tbody-categoria")
    const tr = document.createElement("tr")
// indice
const  tdIndice = document.createElement("td")
tdIndice.innerText = indice;
tr.appendChild(tdIndice)
// nombre
const tdNombre = document.createElement("td");
  tdNombre.innerText = categoria.nombre;
  tr.appendChild(tdNombre);
//   
const tdBotones = document.createElement("td");
  const btnEditar = document.createElement("button");
  const btnEliminar = document.createElement("button");

  btnEditar.type = "button";
  btnEliminar.type = "button";

  btnEditar.classList.add("btn", "btn-warning", "btn-sm", "me-2");
  btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "me-2");
  
  btnEditar.innerText = "Editar";
  btnEliminar.innerText = "Eliminar";
  

  btnEditar.onclick = () => {
    prepararEdicionDeCat(categoria.codigo);
  };
  btnEliminar.onclick = () => {
    eliminarCategorias(categoria.codigo)
  
  };
   
  tdBotones.appendChild(btnEditar);
  tdBotones.appendChild(btnEliminar);

  tr.appendChild(tdBotones);
// 
    tbody.appendChild(tr)
}

export const tablaCat = ()=>{
    const categoria = obtenerCategoriaDeLS()
const tbody = document.getElementById("tbody-categoria")

tbody.innerHTML ="";


    categoria.forEach((categoria, indice)=>{
        crearFilaTablaCat(categoria,indice)
    })
}



export const prepararEdicionDeCat = (codigo) => {
    // traer la lista
    const categoria = obtenerCategoriaDeLS();
    // bucar pelicila o serie
    const categoriaSeleccionada = categoria.find((item) => item.codigo === codigo);
    
      // seleccionar los campos
      const campoCategoria = document.getElementById("input-categoria");
     
  //  cargar los datos el el formulario
  
      campoCategoria.value = categoriaSeleccionada.nombre
      // guardar codigo
  
      sessionStorage.setItem("codigoCategoria",codigo)
  };


  export const estaEditandoCat = () =>{
    const codigo = sessionStorage.getItem("codigoCategoria")
  
    if (codigo === null) {
      return false;
    } else {
      return true;
    }
  }