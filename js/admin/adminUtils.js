import { ordenarLista } from "../utils.js";
import { eliminarPeliculasSerie } from "./abm.js";

export const obtenerPeliculasOSeriesDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};

export const agregarPeliculasOSeriesALS = (nuevaPOS) => {
  const pOS = obtenerPeliculasOSeriesDeLS();

  pOS.push(nuevaPOS);

  localStorage.setItem("peliculasSeries", JSON.stringify(pOS));
};



export const crearFilaTabla = (peliculaOSerie, indice) => {
  const tbody = document.getElementById("tbody-peli-serie");

  const tr = document.createElement("tr");
  //  indice
  const tdIndice = document.createElement("td");
  tdIndice.innerText = indice;
  tr.appendChild(tdIndice);
  // img
  const tdImagen = document.createElement("td");
  const img = document.createElement("img");
  img.src = peliculaOSerie.caratula;
  img.alt = peliculaOSerie.caratula;
  img.classList.add("imagen-tabla");
  tdImagen.appendChild(img);
  tr.appendChild(tdImagen);

  // Nombre
  const tdNombre = document.createElement("td");
  tdNombre.innerText = peliculaOSerie.nombre;
  tr.appendChild(tdNombre);
  // tipo
  const tdTipo = document.createElement("td");
  tdTipo.innerText = peliculaOSerie.tipo;
  tr.appendChild(tdTipo);
  // duracion
  const tdDuracion = document.createElement("td");
  tdDuracion.innerText = peliculaOSerie.duracion;
  tr.appendChild(tdDuracion);
  // descripcion
  const tdDescripcion = document.createElement("td");
  tdDescripcion.innerText = peliculaOSerie.descripcion;
  tr.appendChild(tdDescripcion);
  // publicada
  const tdpublicada = document.createElement("td");
  tdpublicada.innerText = peliculaOSerie.publicada;
  tr.appendChild(tdpublicada);

  // botones
  const tdBotones = document.createElement("td");
  const btnEditar = document.createElement("button");
  const btnEliminar = document.createElement("button");

  btnEditar.type = "button";
  btnEliminar.type = "button";
  btnEditar.classList.add("btn", "btn-warning", "btn-sm", "me-2");
  btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
  btnEditar.innerText = "Editar";
  btnEliminar.innerText = "Eliminar";

  btnEditar.onclick = () => {
    prepararEdicionDePOS(peliculaOSerie.codigo);
  };
  btnEliminar.onclick = () => {
    eliminarPeliculasSerie(peliculaOSerie.codigo)
  };
  tdBotones.appendChild(btnEditar);
  tdBotones.appendChild(btnEliminar);
  tr.appendChild(tdBotones);
  // añadir todo
  tbody.appendChild(tr);
};

export const cargarTabla = () => {
  const pOS = ordenarLista(obtenerPeliculasOSeriesDeLS());
  // VACIAR TABLA
  const tbody = document.getElementById("tbody-peli-serie");
  tbody.innerHTML = "";
  // CARGAR TABLA
  pOS.forEach((peliculaOSerie, indice) => {
    crearFilaTabla(peliculaOSerie, indice);
  });
};

// PARA EDITAR
const prepararEdicionDePOS = (codigo) => {
  // traer la lista
  const peliculaOSerie = obtenerPeliculasOSeriesDeLS();
  // bucar pelicila o serie
  const peliculaOSerieSeleccionada = peliculaOSerie.find((item) => item.codigo === codigo);
  
    // seleccionar los campos
    const campoNombre = document.getElementById("input-nombre");
    const campoTipo = document.getElementById("input-tipo");
    const campoDuracion = document.getElementById("input-duracion");
    const campoPublicada = document.getElementById("input-publicada");
    const campoCaratula = document.getElementById("input-caratula");
    const campoDescripcion = document.getElementById("input-descripcion");
//  cargar los datos el el formulario

    campoNombre.value = peliculaOSerieSeleccionada.nombre
    campoTipo.value = peliculaOSerieSeleccionada.tipo
    campoDuracion.value = peliculaOSerieSeleccionada.duracion
    campoPublicada.value = peliculaOSerieSeleccionada.publicada
    campoCaratula.value = peliculaOSerieSeleccionada.caratula
    campoDescripcion.value = peliculaOSerieSeleccionada.descripcion

    // guardar codigo

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