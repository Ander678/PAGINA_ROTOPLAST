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


let mostrador = document.querySelectorAll('.box');
let seleccion = document.getElementById('seleccion');
let imgSeleccionada = document.getElementById('img');
let modeloSeleccionado = document.getElementById('modelo');
let descripSeleccionada = document.getElementById('descripcion');
let precioSeleccionado = document.getElementById('precio');

function cargar(item) {
    seleccion.style.display = 'block'; // Mostrar el contenedor del item seleccionado
    seleccion.style.width = '100%';
    seleccion.style.opacity = '1';

    imgSeleccionada.src = item.querySelector('img').src;
    modeloSeleccionado.textContent = item.querySelector('h4').textContent;
    descripSeleccionada.textContent = 'Descripción del modelo';
    precioSeleccionado.textContent = item.dataset.cantidad;
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.opacity = "0";
    seleccion.style.width = '0%';
}

// Agregando eventos a los elementos de clase "box"
mostrador.forEach(function(item) {
    item.addEventListener('click', function() {
        cargar(this);
    });
});

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

    if (categoria === 'all') {
        restablecerBotonesCotiza();
    } else {
        // Cambiar el botón "COTIZA AHORA!" por "Inspeccionar"
        let botonesCotiza = document.querySelectorAll('.box .btn');
        botonesCotiza.forEach(function(boton) {
            boton.textContent = 'Inspeccionar';
            boton.removeAttribute('href');
            boton.addEventListener('click', function() {
                cargar(boton.closest('.box'));
            });
        });
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

