// JavaScript para filtrar productos por barra de búsqueda
function filtrarProductos() {
    var filtro = document.getElementById('filtro').value.toLowerCase();
    var productos = document.querySelectorAll('.producto');

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
    var productos = document.querySelectorAll('.producto');

    productos.forEach(function(producto) {
        var categoriaProducto = producto.getAttribute('category').toLowerCase();
        if (categoriaProducto === categoria || categoria === 'all') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

