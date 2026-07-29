const toggleBtn = document.querySelector('???'); 
const htmlElement = document.documentElement;

// On lit ce qui est stocké dans le navigateur
const savedTheme = localStorage.getItem('theme');

// Si une valeur existe et qu'elle vaut "dark", on l'applique
if (savedTheme === 'dark') {
  htmlElement.setAttribute('data-theme', 'dark');
}

// ===============================
// MENU HAMBURGER MOBILE
// ===============================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    // Accessibilité : on met à jour aria-expanded selon l'état du menu
    const estOuvert = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', estOuvert);
  });
}


// ===============================
// NAVBAR DYNAMIQUE AU SCROLL
// ===============================
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===============================
// ANNÉE DYNAMIQUE DANS LE FOOTER
// ===============================

// On récupère l'élément qui doit afficher l'année (id="annee-courante" dans le footer)
const elementAnnee = document.getElementById('annee-courante');

// On vérifie qu'il existe bien sur la page avant de l'utiliser (sécurité)
if (elementAnnee) {
  elementAnnee.textContent = new Date().getFullYear();
}


// ===============================
// BOUTON RETOUR EN HAUT
// ===============================

const btnRetourHaut = document.getElementById('btn-retour-haut');

if (btnRetourHaut) {

  // 1. On surveille le scroll de la page pour afficher/masquer le bouton
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      // Après 300px de scroll, on affiche le bouton
      btnRetourHaut.style.display = 'flex';
    } else {
      // Avant 300px, on le cache
      btnRetourHaut.style.display = 'none';
    }
  });

  // 2. Au clic, on remonte en douceur en haut de la page
  btnRetourHaut.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}

toggleBtn.addEventListener('click', () => {
  // 1. Vérifier l'état actuel : est-ce que data-theme vaut déjà "dark" ?
  const isDark = htmlElement.getAttribute('data-theme') === 'dark';

  // 2. Inverser l'état
  if (isDark) {
    // que fait-on ici ?
  } else {
    // et ici ?
  }

  // 3. Sauvegarder le nouveau choix dans localStorage
});