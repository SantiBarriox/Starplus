import { obtenerCategoriaDeLS, prepararEdicionDeCat } from "../adminCategoria/adminUtils.js";
import { ordenarLista } from "../utils.js";
import { destacarPeliculasSerie, eliminarPeliculasSerie } from "./abm.js";

export const obtenerPeliculasOSeriesDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};

export const agregarPeliculasOSeriesALS = (nuevaPOS) => {
  const pOS = obtenerPeliculasOSeriesDeLS();

  pOS.push(nuevaPOS);

  localStorage.setItem("peliculasSeries", JSON.stringify(pOS));
};


const categorias = obtenerCategoriaDeLS();

const selectCategoria = document.getElementById("categoria");
selectCategoria.classList.add("form-select");
categorias.forEach((categoria) => {
  const option = document.createElement("option");
  
  option.value = categoria.codigo;
  option.textContent = categoria.nombre; 
  selectCategoria.appendChild(option);
});


export const crearFilaTabla = (peliculaOSerie, indice) => {
  const tbody = document.getElementById("tbody-peli-serie");

  const tr = document.createElement("tr");

  const tdIndice = document.createElement("td");
  tdIndice.innerText = indice;
  tr.appendChild(tdIndice);

  const tdImagen = document.createElement("td");
  const img = document.createElement("img");
  img.src = peliculaOSerie.caratula;
  img.alt = peliculaOSerie.caratula;
  img.classList.add("imagen-tabla");
  tdImagen.appendChild(img);
  tr.appendChild(tdImagen);


  const tdNombre = document.createElement("td");
  tdNombre.innerText = peliculaOSerie.nombre;
  tr.appendChild(tdNombre);


  const tdTipo = document.createElement("td");
  tdTipo.innerText = peliculaOSerie.tipo;
  tr.appendChild(tdTipo);

  const tdDuracion = document.createElement("td");
  tdDuracion.innerText = peliculaOSerie.duracion;
  tr.appendChild(tdDuracion);

  const tdDescripcion = document.createElement("td");
  tdDescripcion.innerText = peliculaOSerie.descripcion;
  tr.appendChild(tdDescripcion);

  const tdpublicada = document.createElement("td");
  tdpublicada.innerText = peliculaOSerie.publicada;
  
  tr.appendChild(tdpublicada);

  const tdCategoria = document.createElement("td");
  const categoria = categorias.find((cat) => cat.codigo === peliculaOSerie.categoria);
  tdCategoria.innerText = categoria ? categoria.nombre : "Sin categoría";
  tr.appendChild(tdCategoria);


  const tdBotones = document.createElement("td");
  const btnEditar = document.createElement("button");
  const btnEliminar = document.createElement("button");
  const btnDestacar = document.createElement("button");

  btnEditar.type = "button";
  btnEliminar.type = "button";
  btnDestacar.type = "button"
  btnEditar.classList.add("btn", "btn-warning", "btn-sm", "me-2");
  btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "me-2");
  btnDestacar.classList.add("btn", "btn-danger", "btn-sm");
  btnEditar.innerText = "Editar";
  btnEliminar.innerText = "Eliminar";
  btnDestacar.innerText = "Destacar";

  btnEditar.onclick = () => {
    prepararEdicionDePOS(peliculaOSerie.codigo);
  };
  btnEliminar.onclick = () => {
    eliminarPeliculasSerie(peliculaOSerie.codigo)
  };
  btnDestacar.onclick = () => {
    destacarPeliculasSerie(peliculaOSerie.codigo)
  }
  tdBotones.appendChild(btnEditar);
  tdBotones.appendChild(btnEliminar);
  tdBotones.appendChild(btnDestacar);
  tr.appendChild(tdBotones);

  tbody.appendChild(tr);
};

export const cargarTabla = () => {
  const pOS = ordenarLista(obtenerPeliculasOSeriesDeLS());

  const tbody = document.getElementById("tbody-peli-serie");
  tbody.innerHTML = "";

  pOS.forEach((peliculaOSerie, indice) => {
    crearFilaTabla(peliculaOSerie, indice);
  });
};


const prepararEdicionDePOS = (codigo) => {

  const peliculaOSerie = obtenerPeliculasOSeriesDeLS();

  const peliculaOSerieSeleccionada = peliculaOSerie.find((item) => item.codigo === codigo);
  
    const campoNombre = document.getElementById("input-nombre");
    const campoTipo = document.getElementById("input-tipo");
    const campoDuracion = document.getElementById("input-duracion");
    const campoPublicada = document.getElementById("input-publicada");
    const campoCaratula = document.getElementById("input-caratula");
    const campoDescripcion = document.getElementById("input-descripcion");
   const selectCategoria = document.getElementById("categoria")

    campoNombre.value = peliculaOSerieSeleccionada.nombre
    campoTipo.value = peliculaOSerieSeleccionada.tipo
    campoDuracion.value = peliculaOSerieSeleccionada.duracion
    campoPublicada.value = peliculaOSerieSeleccionada.publicada
    campoCaratula.value = peliculaOSerieSeleccionada.caratula
    campoDescripcion.value = peliculaOSerieSeleccionada.descripcion
    selectCategoria.value = peliculaOSerieSeleccionada.categoria

    sessionStorage.setItem("codigoPeliculaOSerie",codigo)
};


export const estaEditando = () =>{
  const codigo = sessionStorage.getItem("codigoPeliculaOSerie")

  if (codigo === null) {
    return false;
  } else {
    return true;
  }
}



