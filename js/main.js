const toggle = document.getElementById("theme-toggle");
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
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btnRetourHaut.style.display = 'flex';
    } else {
      btnRetourHaut.style.display = 'none';
    }
  });
}


if (toggle) {
  toggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
}