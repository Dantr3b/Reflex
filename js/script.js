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

function toggleVisibility(vehicle) {
    // Sélectionne tous les paragraphes dans les deux divs
    var titlemoto=document.querySelector('.title .moto h1');
    var titlevoiture=document.querySelector('.title .voiture h1');
    var paragraphsMoto = document.querySelector('.motocontent');
    var paragraphsVoiture = document.querySelector('.voiturecontent');

    // Vérifie quelle div a été cliquée et ajuste la visibilité des paragraphes en conséquence
    if (vehicle === 'moto') {
        titlemoto.style.color = 'white';
        titlevoiture.style.color = '#909090';
        titlemoto.style.borderBottom = '#00ff00 solid 0.8rem';
        titlevoiture.style.borderBottom = 'none';
        paragraphsMoto.style.display = 'block'; // Affiche le paragraphe de la moto
        paragraphsVoiture.style.display = 'none'; // Cache le paragraphe de la voiture
    } else if (vehicle === 'voiture') {
        titlevoiture.style.color = 'white';
        titlemoto.style.color = '#909090';
        titlemoto.style.borderBottom = 'none';
        titlevoiture.style.borderBottom = '#00ff00 solid 0.8rem';
        paragraphsMoto.style.display = 'none'; // Cache le paragraphe de la moto
        paragraphsVoiture.style.display = 'block'; // Affiche le paragraphe de la voiture
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let current = '';
        

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset+50 >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.id;
            }
        });
        

        document.querySelectorAll('nav a').forEach(a => {
            a.style.color = 'white';
            if (a.getAttribute('href').slice(1) === current) {
                a.style.color = '#00ff00';
                console.log(a);
            }
        });
    });
});