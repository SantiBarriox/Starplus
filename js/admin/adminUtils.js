import { obtenerCategoriaDeLS, prepararEdicionDeCat } from "../adminCategoria/adminUtils.js";
import { ordenarLista } from "../utils.js";
import { destacarPeliculasSerie, eliminarPeliculasSerie } from "./abm.js";
// OBTENER PELICULAS O SERIES DEL LS
export const obtenerPeliculasOSeriesDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};
// AGREGAR PELICULAS O SERIES AL LS
export const agregarPeliculasOSeriesALS = (nuevaPOS) => {
  const pOS = obtenerPeliculasOSeriesDeLS();

  pOS.push(nuevaPOS);

  localStorage.setItem("peliculasSeries", JSON.stringify(pOS));
};

// AGREGA CATEGORIAS AL FORM DE PELICULAS O SERIES

// LLAMO LAS CATEGORIAS GUARDADAS EN EL LS
const categorias = obtenerCategoriaDeLS();
// SELECCIONO EL ELEMENTO EN HTM
const selectCategoria = document.getElementById("categoria");
// LLENA EL CAMPO DE SELECCION CON LAS CATEGORIAS
categorias.forEach((categoria) => {
  const option = document.createElement("option");
  option.value = categoria.codigo; // Asigna el valor del campo según tu estructura de categorías
  option.textContent = categoria.nombre; // Asigna el nombre de la categoría
  selectCategoria.appendChild(option);
});


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
// 
const tdCategoria = document.createElement("td");
  const categoria = categorias.find((cat) => cat.codigo === peliculaOSerie.categoria);
  tdCategoria.innerText = categoria ? categoria.nombre : "Sin categoría"; // Si la categoría no se encuentra, muestra "Sin categoría"
  tr.appendChild(tdCategoria);
  // botones
  // botones
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
    selectCategoria.value = peliculaOSerieSeleccionada.categoria;
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



