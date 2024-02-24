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

// Función para mostrar el modal del producto correspondiente
function showModal(modal, item) {
  modal.style.display = "block";
  cargarDetallesProducto(item);
}

// Función para ocultar el modal del producto correspondiente
function hideModal(modal) {
  modal.style.display = "none";
}

// Función para cargar los detalles del producto en el modal
function cargarDetallesProducto(item) {
  var imagen = item.querySelector(".box-img img").src;
  var nombre = item.querySelector("h4").textContent;

  // Puedes añadir más selectores para otras propiedades del producto si es necesario

  document.getElementById("img").src = imagen;
  document.getElementById("modelo").textContent = nombre;

  // Puedes añadir más líneas para cargar más detalles del producto en el modal
}

// Obtener elementos del DOM
var modals = document.querySelectorAll('.modal');
var btns = document.querySelectorAll(".btn");
var spans = document.querySelectorAll(".close");
var products = document.querySelectorAll(".box");

// Agregar manejadores de eventos a cada botón
btns.forEach((btn, index) => {
  btn.onclick = function() {
    showModal(modals[index], products[index]);
  }
});

// Agregar manejadores de eventos a cada botón de cierre
spans.forEach((span, index) => {
  span.onclick = function() {
    hideModal(modals[index]);
  }
});

// Ocultar modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      hideModal(modal);
    }
  });
}


