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