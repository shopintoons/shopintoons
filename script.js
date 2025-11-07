// script.js — version robuste "Amazon affilié"
(function () {
  console.log("🚀 script.js chargé");

  // 1️⃣ Trouve la grille où afficher les produits
  const grid = document.getElementById("productGrid");

  if (!grid) {
    console.error("❌ Élément #productGrid introuvable dans la page !");
    return;
  }

  // 2️⃣ Récupère les produits (peu importe comment ils ont été déclarés)
  const products =
    window.PRODUCTS ||
    (typeof PRODUCTS !== "undefined" ? PRODUCTS : null);

  if (!Array.isArray(products)) {
    console.error("❌ Aucun produit trouvé (PRODUCTS non défini)");
    return;
  }

  console.log(`🛍️ ${products.length} produit(s) trouvé(s)`);

  // 3️⃣ Vide la grille avant de la remplir
  grid.innerHTML = "";

  // 4️⃣ Crée une carte pour chaque produit
  products.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__img">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
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

  console.log("✅ Rendu terminé !");
})();
