// Rendu de la grille multi-produits (affiliation Amazon)
(function () {
  const grid = document.getElementById("productGrid");
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  if (!grid) {
    console.error("❌ #productGrid introuvable");
    return;
  }

  function buildAmazonUrl(p) {
    if (p.amazon_url) return p.amazon_url;
    if (p.asin) {
      const tag = (typeof window.AMAZON_TAG === "string" && window.AMAZON_TAG.trim()) ? window.AMAZON_TAG.trim() : "";
      const base = `https://www.amazon.fr/dp/${encodeURIComponent(p.asin)}`;
      return tag ? `${base}?tag=${encodeURIComponent(tag)}` : base;
    }
    return "#";
  }

  function stars(rating = 0) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
  }

  function chips(arr = []) {
    return (arr || []).map(txt => `<span class="chip">${txt}</span>`).join("");
  }

  function render(list) {
    grid.innerHTML = "";
    (list || []).forEach(p => {
      const url = buildAmazonUrl(p);
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <div class="card__img">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc || ""}</p>
        <div class="card__meta">
          <span class="stars" aria-label="Note ${p.rating || 0}/5">${stars(p.rating)}</span>
          <span class="badges">${chips(p.badges)}</span>
        </div>
        <a class="btn--amazon"
           href="${url}"
           target="_blank"
           rel="nofollow sponsored noopener"
           aria-label="Voir sur Amazon : ${p.title}">
          Voir sur Amazon
        </a>
      `;
      grid.appendChild(el);
    });
  }

  // Supporte window.PRODUCTS ou PRODUCTS (const) sans casser
  const list =
    window.PRODUCTS ||
    (typeof PRODUCTS !== "undefined" ? PRODUCTS : []);
  render(list);
})();
