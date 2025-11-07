// script.js
// Année auto dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Rendu de la grille
const grid = document.getElementById("productGrid");

function renderProducts(list){
  if(!grid || !Array.isArray(list)) return;
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__img">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc || ""}</p>
        <a class="btn-amazon"
           href="${p.amazon_url}"
           target="_blank"
           rel="nofollow sponsored noopener">
          Voir sur Amazon
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(window.PRODUCTS || []);
});
