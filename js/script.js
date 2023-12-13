// Obtenez la barre de navigation
const navbar = document.querySelector('nav');

// Obtenez la position initiale de la barre de navigation
const initialOffset = navbar.offsetTop;

// Fonction de gestion du défilement
function handleScroll() {
    if (window.pageYOffset-5 >= initialOffset) {
        // Ajoutez la classe 'fixed' lorsque la barre atteint le haut de la page
        navbar.classList.add('fixed');
    } else {
        // Retirez la classe 'fixed' lorsque la barre n'est pas au-dessus de la page
        navbar.classList.remove('fixed');
    }
}

// Ajoutez un écouteur d'événement de défilement
window.addEventListener('scroll', handleScroll);