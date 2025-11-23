function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const id = getParam("id");
const container = document.getElementById("product-container");

fetch("productos.json")
  .then(r => r.json())
  .then(data => {
    const p = data.productos.find(x => x.id === id);

    if (!p) {
      container.innerHTML = `<p>Producto no encontrado.</p>`;
      return;
    }

    const galeria = p.imagenes.map((src, i) =>
      `<img class="thumb ${i===0?'active':''}" src="${src}" data-src="${src}">`
    ).join("");

    container.innerHTML = `
      <div class="product-detail">

        <div class="gallery">
          <img id="main-img" class="main-image" src="${p.imagenes[0]}">

          <div class="thumbs">
            ${galeria}
          </div>
        </div>

        <div class="info">
          <h1>${p.nombre}</h1>
          <p class="price">${p.moneda}${p.precio}</p>
          <p>${p.descripcion_corta}</p>
          <p>${p.descripcion_larga}</p>

          <div class="actions">
            <a class="buy-btn" href="${p.pago}" target="_blank">Comprar ahora</a>
            <a class="btn-secondary" href="index.html">Volver</a>
          </div>
        </div>

      </div>
    `;

    // miniaturas funcionales
    document.querySelectorAll(".thumb").forEach(t => {
      t.addEventListener("click", () => {
        document.getElementById("main-img").src = t.dataset.src;
        document.querySelectorAll(".thumb").forEach(x => x.classList.remove("active"));
        t.classList.add("active");
      });
    });

  });
