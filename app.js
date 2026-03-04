// =============================================
//  LISTE D'ANNIVERSAIRE DE JÉRÉMIE — app.js
//  Ajouter / modifier les cadeaux ici.
//  Les images sont dans le dossier ./pictures/
// =============================================

const gifts = [
  {
    id: 1,
    tag: "Spiritueux & Grand Voyage",
    name: "Whisky Écossais 21 ans d'âge — Dégustation en Château",
    desc: "Une bouteille d'exception vieillie 21 ans dans les Highlands, à savourer sur place, dans un château écossais au coin du feu. Le kilt est fourni. Les moutons dans le pré, non.",
    price: "18 500 €",
    priceNote: "Vol aller-retour et kilt en supplément",
    image: "pictures/Fine Aged Whiskey.png",
  },
  {
    id: 2,
    tag: "Lutherie de Légende",
    name: "Guitare Électrique Gibson — Édition Rare & Numérotée",
    desc: "Modèle iconique, tirage limité, numéro de série gravé à la main. Le genre de guitare qui reste dans sa boîte en verre mais dont on parle à chaque dîner. Cordes d'origine non incluses — elles font partie de l'œuvre.",
    price: "42 000 €",
    priceNote: "Certificat d'authenticité & boîte en verre non inclus",
    image: "pictures/Luxury Electric Guitar.png",
  },
  {
    id: 3,
    tag: "Percussion & Puissance",
    name: "Batterie Acoustique Haut de Gamme",
    desc: "Fûts en érable canadien, cymbales Zildjian série A Custom, hardware chromé. Idéale pour réveiller les voisins à 7h du matin un dimanche. Ils comprendront — c'est de l'art.",
    price: "28 000 €",
    priceNote: "Voisins compréhensifs non garantis",
    image: "pictures/Luxury Acoustic Drum Kit.png",
  },
  {
    id: 4,
    tag: "Sneakers & Histoire Vivante",
    name: "Nike Numérotées — Portées par Michael Jordan himself",
    desc: "Trois exemplaires dans le monde. Portées par Sa Majesté Jordan lors d'un match dont vous pourrez inventer les détails librement. Taille unique : celle de Jordan. Semelle intérieure authentiquement transpiée.",
    price: "350 000 €",
    priceNote: "Odeur d'origine préservée sous vide",
    image: "pictures/High-End Nike Sneakers.png",
  },
  {
    id: 5,
    tag: "Horlogerie Extrême",
    name: "Montre de Luxe — Mécanisme en Diamant, Bracelet Argent Blanc",
    desc: "Mouvement squelette serti de 212 diamants VVS1, bracelet en argent blanc massif. Se remonte à la main car les batteries, c'est pour les gens ordinaires. Étanche à 30 m — pour les riches qui nagent sobrement.",
    price: "890 000 €",
    priceNote: "Assurance mensuelle : votre salaire annuel",
    image: "pictures/Luxury Chronograph Watch.png",
  },
  {
    id: 6,
    tag: "Technologie & Domesticité",
    name: "Mannequin Robot Japonais — Dernière Génération",
    desc: "Fait le ménage, effectue des calculs complexes, réalise la vidange de la voiture, prépare le café et répond aux messages d'anniversaire ennuyeux à votre place. Disponible en noir mat ou blanc laqué. Parle couramment français avec accent de Kyoto.",
    price: "1 200 000 €",
    priceNote: "Mise à jour logicielle annuelle : 40 000 €",
    image: "pictures/Japanese Female Robot.png,
  },
  {
    id: 7,
    tag: "Automobile & Démesure",
    name: "Voiture de Course Sport Haut de Gamme — Noire, Jantes 22\"",
    desc: "Carrosserie noire obsidienne, jantes forgées 22 pouces, 0 à 100 km/h en 2,8 secondes. Idéale pour aller chercher le pain. Le boulanger sera impressionné. Climatisation incluse pour ne pas transpirer en arrivant.",
    price: "680 000 €",
    priceNote: "PV de stationnement à prévoir dans le budget",
    image: "pictures/Luxury Sports Car.png",
  },
  {
    id: 8,
    tag: "Audio & Classe Absolue",
    name: "Casque Bluetooth Sans Fil Noir — Édition Prestige",
    desc: "Réduction de bruit active sur 47 niveaux, autonomie 80h, cuir Nappa, finitions chromées. Le genre de casque qui dit « je ne veux parler à personne » avec beaucoup d'élégance. Compatible avec tous les appareils sauf les vieux.",
    price: "4 800 €",
    priceNote: "L'objet le plus abordable de cette liste — honteux.",
    image: "pictures/Premium Noise-Cancelling Headphones.png",
  },
];

// ---- RENDER ----

function renderGifts() {
  const container = document.getElementById('gifts');

  gifts.forEach((gift, index) => {
    const item = document.createElement('article');
    item.className = 'gift-item';
    item.innerHTML = `
      <span class="gift-index">${String(index + 1).padStart(2, '0')}</span>

      <div class="gift-image-wrap" data-id="${gift.id}" role="button" tabindex="0" aria-label="Voir ${gift.name}">
        <img src="${gift.image}" alt="${gift.name}" loading="lazy" onerror="this.src='https://placehold.co/480x360/1a1a1a/c9a84c?text=Photo+bientôt'" />
      </div>

      <div class="gift-info">
        <span class="gift-tag">${gift.tag}</span>
        <h2 class="gift-name">${gift.name}</h2>
        <p class="gift-desc">${gift.desc}</p>
      </div>

      <div class="gift-price-col">
        <span class="gift-price">${gift.price}</span>
        <span class="gift-price-note">${gift.priceNote}</span>
        <button class="gift-btn" data-id="${gift.id}">Je l'offre 🎁</button>
      </div>
    `;
    container.appendChild(item);
  });

  // Boutons "Je l'offre"
  document.querySelectorAll('.gift-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      handleGiftClick(id, 'btn');
    });
  });

  // Images cliquables
  document.querySelectorAll('.gift-image-wrap').forEach(wrap => {
    wrap.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      handleGiftClick(id, 'image');
    });
    wrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const id = parseInt(e.currentTarget.dataset.id);
        handleGiftClick(id, 'image');
      }
    });
  });

  // Scroll reveal
  initScrollReveal();
}

// ---- ACTION SUR CLIC (à personnaliser) ----

function handleGiftClick(giftId, source) {
  const gift = gifts.find(g => g.id === giftId);
  if (!gift) return;

  // TODO : remplacer par la vraie action (lien, modal, blague, etc.)
  console.log(`[Clic ${source}] Cadeau #${giftId} : ${gift.name}`);

  // Exemple : petit feedback visuel
  alert(`🎁 Excellent choix !\n\n« ${gift.name} »\n\nJérémie vous en sera éternellement reconnaissant.\n(Virement bancaire accepté, cryptos aussi.)`);
}

// ---- SCROLL REVEAL ----

function initScrollReveal() {
  const items = document.querySelectorAll('.gift-item');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => obs.observe(item));
  } else {
    items.forEach(item => item.classList.add('visible'));
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', renderGifts);
