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

/****************************EFFECT****************************/
// Initial setup
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let context = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

let maxx = canvas.width;
let maxy = canvas.height;
let halfx = maxx / 2;
let halfy = maxy / 2;

let dotCount = 200;
let dots = [];

// Create dots
for (let i = 0; i < dotCount; i++) {
    dots.push(new Dot());
}

// Dot class
function Dot() {
    this.rad_x = 2 * Math.random() * halfx + 1;
    this.rad_y = 1.2 * Math.random() * halfy + 1;
    this.alpha = Math.random() * 360 + 1;
    this.speed = (Math.random() < 0.5 ? 1 : -1) * 0.1;
    this.size = Math.random() * 5 + 1;
    this.color = Math.floor(Math.random() * 256);
}

// Drawing dot
Dot.prototype.draw = function() {
    let dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
    let dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
    context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
    context.fillRect(dx, dy, this.size, this.size);
};

// Calculate new position in polar coordinates
Dot.prototype.move = function() {
    this.alpha += this.speed;
    if (Math.random() < 0.5) {
        this.color = (this.color + 1) % 256;
    } else {
        this.color = (this.color - 1 + 256) % 256;
    }
};

// Dots animation
function render() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let dot of dots) {
        dot.draw();
        dot.move();
    }
    requestAnimationFrame(render);
}

// Start animation
render();