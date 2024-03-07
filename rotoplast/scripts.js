

function displayProducts(productList){
    let productsHTML = '';
    productList.forEach(element => {
        productsHTML +=
        `
        <div id="${element.id}" class="box" data-nombre="${element.dataNombre}" category="${element.category}" data-cantidad="${element.dataCantidad}">
            <div class="box-img">
                <img src="${element.image}" alt="">
            </div>
            <h4>${element.name}</h4>
            <a id="showModalBtn" class="btn" ">Ver Detalles</a>
        </div>
        `
    });
    document.getElementById('populares-container').innerHTML = productsHTML;
}

window.onload = async() => {
    const response = await fetch("/api/products");
        const productList = await response.json();
        console.log(productList);
        displayProducts(productList);
}

