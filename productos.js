fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById("product-list");

        data.productos.forEach(producto => {
            const item = `
                <div class="product">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p class="price">${producto.precio}</p>
                    <p>${producto.descripcion}</p>
                    <a class="buy-btn" href="${producto.pago}" target="_blank">Comprar ahora</a>
                </div>
            `;
            contenedor.innerHTML += item;
        });
    })
    .catch(error => console.error("Error cargando productos:", error));
