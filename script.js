let header = document.getElementById('my_header');

window.addEventListener('scroll',function(){
    header.classList.toggle('shadow',this.window.scrollY > 50)
})



let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = '';
    letters.forEach((letter) => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(() => {
            letter.className = 'letter out';
        }, 1 * 80);
    })

    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = 'letter in';
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText, 2500)

// Fonction pour mettre à jour le menu actif
function activateMenu(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('id');
            const activeMenuItem = document.querySelector(`.navbar ul li a[href="#${targetId}"]`);

            // Supprime la classe active de tous les liens du menu
            document.querySelectorAll('.navbar ul li a').forEach(item => item.classList.remove('active_color'));

            // Ajoute la classe active au lien de menu correspondant à la section visible
            if (activeMenuItem) {
                activeMenuItem.classList.add('active_color');
            }
        }
    });
}
// Options de l'Intersection Observer
const observerOptions = {
    rootMargin: '-50px 0px -50px 0px', // Marge pour activer l'intersection légèrement avant ou après la section
    threshold: 0.5, // Le pourcentage visible de la section pour déclencher l'intersection
};

// Crée une instance de l'Intersection Observer en lui passant la fonction de rappel
const observer = new IntersectionObserver(activateMenu, observerOptions);

// Sélectionne toutes les sections et observe chacune d'entre elles
document.querySelectorAll('section').forEach(section => observer.observe(section));


/*======================= navbar =============*/
let navbar = document.querySelector('.navbar');
let close = document.querySelector('.close_button')
let menu = document.querySelector('.active_button');
let nav__button = document.querySelector('.nav__button');

menu.onclick = function () {
    menu.classList.add('off');
    nav__button.classList.add('rotate');
    close.classList.remove('off');
    navbar.classList.add('open');
}
close.onclick = function () {
    close.classList.add('off');
    nav__button.classList.remove('rotate');
    menu.classList.remove('off');
    navbar.classList.remove('open');
}

window.onscroll = function () {
    close.classList.add('off');
    nav__button.classList.remove('rotate');
    menu.classList.remove('off');
    navbar.classList.remove('open');
}

window.addEventListener('scroll',function(){
    header.classList.toggle('shadow',this.window.scrollY > 30)
})