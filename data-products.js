/* Liste multi-produits (grille auto). 
   Astuce : tu peux mettre soit amazon_url, soit asin. 
   Si asin est présent, le lien affilié est construit avec window.AMAZON_TAG si défini. */

window.AMAZON_TAG = "novanad-21"; // remplace par ton tag si besoin

// Tu peux dupliquer/éditer ces objets.
const PRODUCTS = [
  {
    title: "Tablette dessin enfant dinosaure",
    desc: "Ardoise magique 8.5\" — jouet éducatif et créatif pour enfants.",
    image: "assets/img/tablette-dino.jpg",
    amazon_url: "https://amzn.to/4oYjggp",
    rating: 4.6,
    badges: ["Populaire", "Enfant"]
  },
  {
    title: "Lampe de bureau LED flexible",
    desc: "3 températures de couleur, col de cygne souple, éco & compacte.",
    image: "assets/img/lampe-led.jpg",
    asin: "B09EXAMPLE1",
    rating: 4.5,
    badges: ["Bureau"]
  },
  {
    title: "Bouteille isotherme 500 ml",
    desc: "Inox 304, garde le chaud/froid 12–24 h, idéale au quotidien.",
    image: "assets/img/bouteille.jpg",
    asin: "B0BEXAMPLE2",
    rating: 4.7,
    badges: ["Sport", "Nomade"]
  },
  {
    title: "Câble USB-C tressé 2 m",
    desc: "Charge rapide PD, très résistant, parfait pour la maison et le bureau.",
    image: "assets/img/cable.jpg",
    asin: "B0CEXAMPLE3",
    rating: 4.4,
    badges: ["Top petit prix"]
  }
];
