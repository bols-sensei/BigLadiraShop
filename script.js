
// Hamburger menu
function toggleMenu() {
  document.querySelector('nav').classList.toggle('show');
}

// Produits définis manuellement (20 baskets + 20 chaussures)
const products = [
  // ================== BASKETS ==================
  { name: "Basket 1", desc: "Design moderne et confortable.", price: "$100", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 2", desc: "Style classique pour vos sorties.", price: "$101", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 3", desc: "Légère et respirante pour l’été.", price: "$102", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 4", desc: "Polyvalente et tendance.", price: "$103", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 5", desc: "Parfaite pour un style urbain.", price: "$104", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 6", desc: "Confortable pour toutes les occasions.", price: "$105", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 7", desc: "Design léger et sportif.", price: "$106", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 8", desc: "Idéale pour la ville et le sport.", price: "$107", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 9", desc: "Style moderne et minimaliste.", price: "$108", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 10", desc: "Design sportif et confortable.", price: "$109", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 11", desc: "Respirante et légère pour l’été.", price: "$110", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 12", desc: "Confort et style urbain.", price: "$111", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 13", desc: "Design élégant et sportif.", price: "$112", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 14", desc: "Polyvalente et confortable.", price: "$113", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 15", desc: "Style moderne et décontracté.", price: "$114", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 16", desc: "Légère pour vos activités quotidiennes.", price: "$115", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 17", desc: "Confortable et tendance.", price: "$116", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 18", desc: "Design sportif et moderne.", price: "$117", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 19", desc: "Idéale pour le quotidien.", price: "$118", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Basket 20", desc: "Polyvalente et stylée.", price: "$119", category: "basket", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},

  // ================== CHAUSSURES ==================
  { name: "Chaussure 1", desc: "Élégante et durable.", price: "$130", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 2", desc: "Confort optimal.", price: "$131", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 3", desc: "Sobriété et élégance.", price: "$132", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 4", desc: "Robuste et confortable.", price: "$133", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 5", desc: "Style classique indémodable.", price: "$134", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 6", desc: "Design élégant pour toutes occasions.", price: "$135", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 7", desc: "Confortable et stylée.", price: "$136", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 8", desc: "Polyvalente et robuste.", price: "$137", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 9", desc: "Design moderne et confortable.", price: "$138", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 10", desc: "Idéale pour vos journées.", price: "$139", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 11", desc: "Confort et style.", price: "$140", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 12", desc: "Polyvalente et tendance.", price: "$141", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 13", desc: "Design moderne et léger.", price: "$142", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 14", desc: "Robuste et confortable.", price: "$143", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 15", desc: "Style classique et élégant.", price: "$144", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 16", desc: "Idéale pour toutes occasions.", price: "$145", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 17", desc: "Confortable et stylée.", price: "$146", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 18", desc: "Design moderne et confortable.", price: "$147", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 19", desc: "Polyvalente et élégante.", price: "$148", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]},
  { name: "Chaussure 20", desc: "Confort et style moderne.", price: "$149", category: "chaussure", colors:[{hex:"#000", img:"images/black.png", label:"Noir"}, {hex:"#4CAF50", img:"images/green.png", label:"Vert"}]}
];

const itemsPerPage = 6; // combien de produits par page
let currentPage = 1;    // page active

const grid = document.getElementById('shop');

// Rendu des produits
function renderProducts(cat, page = 1) {
  grid.innerHTML = '';

  const filtered = products.filter(p => p.category === cat);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = filtered.slice(start, end);

  paginated.forEach(product => {
    const card = document.createElement('article');
    card.classList.add('card-item');
    card.innerHTML = `
      <img src="${product.colors[0].img}" alt="${product.name}"/>
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="price">${product.price}</div>
      <div class="colors" role="list">
        ${product.colors.map((c, i) => 
          `<span class="swatch${i===0?' selected':''}" style="background:${c.hex}" role="listitem" data-img="${c.img}" aria-label="${c.label}" onclick="changeColor(this,'${c.img}')"></span>`
        ).join('')}
      </div>
      <button class="btn" onclick="orderWhatsApp(this)">
        <i class="fa-brands fa-whatsapp"></i> Commander
      </button>
    `;
    grid.appendChild(card);
  });

  renderPagination(cat, filtered.length, page);
}

// Pagination
function renderPagination(cat, totalItems, page) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === page ? "active" : "";
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts(cat, currentPage);
    });
    pagination.appendChild(btn);
  }
}

// Changement de couleur sur produit
function changeColor(el, imgSrc){
  const card = el.closest('.card-item');
  const img = card.querySelector('img');
  img.src = imgSrc;
  card.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  card.classList.add('rotate');
  setTimeout(() => card.classList.remove('rotate'), 400);
}

// Commander via WhatsApp
function orderWhatsApp(btn){
  const card = btn.closest('.card-item');
  const productName = card.querySelector('.product-name').textContent;
  let selected = card.querySelector('.swatch.selected');
  if (!selected) selected = card.querySelector('.swatch');
  const color = selected.getAttribute('aria-label');
  const text = encodeURIComponent(`Bonjour, je suis intéressé par le modèle ${productName} en couleur ${color}. Pouvez-vous me donner plus de détails ou m’indiquer la marche à suivre ?`);
  window.open(`https://wa.me/243998407062?text=${text}`, '_blank');
}

// Slider catégories
function filterCategory(cat){
  document.querySelectorAll('.slider-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts(cat);
}

// Initialisation produits
renderProducts('basket');

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// HERO : couleur par défaut sélectionnée et bouton WhatsApp fonctionnel
const heroSwatches = document.querySelectorAll('.hero .swatch');
const heroImg = document.getElementById('productImg');
const heroBtn = document.getElementById('whatsappBtn');

let heroSelectedColor = heroSwatches[0].getAttribute('aria-label');
let heroSelectedImg = heroSwatches[0].getAttribute('data-img');

function sendHeroWhatsApp() {
  const text = encodeURIComponent(
    "Bonjour, je suis intéressé par le modèle Baskets d’été pour homme en couleur " + heroSelectedColor + ". Pouvez-vous me donner plus de détails ou m’indiquer la marche à suivre ?"
  );
  window.open(`https://wa.me/243998407062?text=${text}`,'_blank');
}

// Mise à jour sur clic couleur
heroSwatches.forEach(s => {
  s.addEventListener('click', () => {
    heroSwatches.forEach(h => h.classList.remove('selected'));
    s.classList.add('selected');
    heroSelectedColor = s.getAttribute('aria-label');
    heroSelectedImg = s.getAttribute('data-img');
    heroImg.src = heroSelectedImg;
  });
});

heroBtn.onclick = sendHeroWhatsApp;
