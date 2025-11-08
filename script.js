// script.js — rendu de la grille + utilitaires
(function () {
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
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.desc || ""}</p>
          <a class="btn btn--amazon"
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

  // scroll doux pour hero bouton
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  render(window.PRODUCTS || []);
})();
