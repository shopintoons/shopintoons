// script.js
(function() {

  // année footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const grid = document.getElementById("productGrid");

  function render(list) {
    if (!grid || !Array.isArray(list)) return;
    grid.innerHTML = "";

    list.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="card__img">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc || ""}</p>

        <a class="btn--amazon"
           href="${p.amazon_url}" 
           target="_blank"
           rel="nofollow sponsored noopener">
           🛒 Voir sur Amazon
        </a>
      `;
      grid.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render(window.PRODUCTS || []);
  });

})();
