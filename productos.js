// Cargar productos en la página principal
fetch("productos.json")
  .then(r => r.json())
  .then(data => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    data.productos.forEach(p => {
      list.innerHTML += `
        <div class="product">
          <a href="producto.html?id=${p.id}">
            <img src="${p.imagenes[0]}" alt="${p.nombre}">
          </a>

          <h2>${p.nombre}</h2>
          <p class="price">${p.moneda}${p.precio}</p>
          <p class="muted">${p.descripcion_corta}</p>

          <div class="card-actions">
            <a class="btn-secondary" href="producto.html?id=${p.id}">Ver producto</a>
            <a class="buy-btn" href="${p.pago}" target="_blank">Comprar</a>
          </div>
        </div>
      `;
    });
  });