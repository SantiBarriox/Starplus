'use strict'

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

  const tdBotones = document.createElement("td");
  const btnEditar = document.createElement("button");
  const btnEliminar = document.createElement("button");

  btnEditar.type = "button";
  btnEliminar.type = "button";
  btnEditar.classList.add("btn", "btn-editar", "btn-sm", "me-1");
  btnEliminar.classList.add("btn", "btn-eliminar", "btn-sm", "mt-1");
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


    campoNombre.value = peliculaOSerieSeleccionada.nombre
    campoTipo.value = peliculaOSerieSeleccionada.tipo
    campoDuracion.value = peliculaOSerieSeleccionada.duracion
    campoPublicada.value = peliculaOSerieSeleccionada.publicada
    campoCaratula.value = peliculaOSerieSeleccionada.caratula
    campoDescripcion.value = peliculaOSerieSeleccionada.descripcion


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