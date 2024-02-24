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

function obtenerCantidadProducto(producto) {
    return parseInt(producto.getAttribute('data-cantidad'));
}

// Función para restablecer los botones "COTIZA AHORA!" cuando se filtran todos los productos
function restablecerBotonesCotiza() {
    let botonesCotiza = document.querySelectorAll('.box .btn');
    botonesCotiza.forEach(function(boton) {
        boton.textContent = 'COTIZA AHORA!';
        boton.href = 'https://api.whatsapp.com/send?phone=51919473580';
    });
}

// JavaScript para filtrar productos por categoría usando un botón
function filtrarPorCategoria(categoria) {
    let productos = document.querySelectorAll('.box');

    productos.forEach(function(producto) {
        let categoriaProducto = producto.getAttribute('category').toLowerCase();
        if (categoriaProducto === categoria.toLowerCase() || categoria === 'all') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Obtener elementos del DOM
var modal = document.getElementById('productModal');
var btn = document.getElementById("showModalBtn");
var span = document.getElementsByClassName("close")[0];

// Mostrar modal cuando se hace clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Ocultar modal cuando se hace clic en la 'x'
span.onclick = function() {
  modal.style.display = "none";
}

// Ocultar modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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

