// JavaScript para filtrar productos por barra de búsqueda
function filtrarProductos() {
    var filtro = document.getElementById('filtro').value.toLowerCase();
    var productos = document.querySelectorAll('.box');

    productos.forEach(function(producto) {
        var nombre = producto.getAttribute('data-nombre').toLowerCase();
        var categoria = producto.getAttribute('category').toLowerCase();
        if (nombre.includes(filtro) || categoria.includes(filtro) || filtro === 'all') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// JavaScript para filtrar productos por categoría usando un botón
function filtrarPorCategoria(categoria) {
    var productos = document.querySelectorAll('.box');

    productos.forEach(function(producto) {
        var categoriaProducto = producto.getAttribute('category').toLowerCase();
        if (categoriaProducto === categoria.toLowerCase() || categoria === 'all') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

function filtrarPorCantidad() {
    var valorSeleccionado = document.getElementById('rango-litros').value;
    var productos = document.querySelectorAll('.box');

    productos.forEach(function(producto) {
        var cantidadProducto = obtenerCantidadProducto(producto); 
        if (cantidadProducto >= valorSeleccionado) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

function obtenerCantidadProducto(producto) {
    return parseInt(producto.getAttribute('data-cantidad'));
}


let mostrador = document.getElementById("populares-container");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("capacidad");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "80%";
    seleccion.style.width = "20%";
    seleccion.style.opacity = "1";
    item.style.border = "1px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
/*
// EL INPUT 
var elrangolitros = document.querySelector('#rango-litros');
if (elInput3) {
  var w = parseInt(window.getComputedStyle(elInput3, null).getPropertyValue('width'));

  // LA ETIQUETA 
  var etq = document.querySelector('.filtro-filtro');
  if (etq) {
    // el valor de la etiqueta (el tooltip) 
    etq.innerHTML = elrangolitros.value;

    // calcula la posición inicial de la etiqueta (el tooltip); 
    var pxls = w / 100;

    etq.style.left = ((elrangolitros.value * pxls) - 15) + 'px';

    elrangolitros.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip) 
      etq.innerHTML = elrangolitros.value;
      // cambia la posición de la etiqueta (el tooltip) 
      etq.style.left = ((elrangolitros.value * pxls) - 15) + 'px';

    }, false);
  }
}

*/