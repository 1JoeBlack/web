// TYPING TEXT ON THE FIRST PAGE - HOME PAGE

const text = ['to my web ', 'Click on projects button '];
var welcome = document.getElementById('welcome');

let textIndex = 0;
let currentText = '';

let letterIndex = 0;
let currentLetter = '';

(function type() {
    if (textIndex === text.length) {
        textIndex = 0;
    }
    currentText = text[textIndex];
    currentLetter = currentText.slice(0, ++letterIndex);

    document.querySelector('.typeHere').textContent = currentLetter;
    if (currentLetter.length === currentText.length) {
        textIndex++;    
        letterIndex = 0;   
    }

    setTimeout(type, 300)

    if (textIndex > 0){
        setTimeout(function(){
            welcome.classList.add('clearW');
          }, 300);
    }
    else{
        setTimeout(function(){
            welcome.classList.remove('clearW');
            welcome.classList.add('welcome');
        }, -200);
    }

})();

// HOME PAGE ANIMATION - ON LOAD
const button = document.querySelector('.wButton');
const carousel = document.querySelector('.slide');
const wText = document.querySelector('.wText');

const tl = new TimelineMax();

// tl.fromTo(button, 2,{opacity: 0, x:40}, {opacity:1, x:0})
tl.fromTo(button, 2.75, {opacity: 0}, {opacity:0 })
.fromTo(button, 0.75, {opacity: 0}, {opacity:1 },'=-0.75')
.fromTo(button, 2, {y: -600, rotation: 45}, {y:0, rotation: 0 , ease:Power2.easeInOut},'=-1')
.fromTo(carousel, 2,{opacity: 0, y:-500}, {opacity:1, y:0, ease:Power2.easeInOut},'=-1');


// PROJECT PAGE ANIMATION - ON LOAD
const cardR = document.querySelector('.c-right');
const cardM = document.querySelector('.c-mid');
const cardL = document.querySelector('.c-left');

const tlMain = new TimelineMax();

tlMain.fromTo(cardM, 1.2,{opacity: 0, y:40}, {opacity:1, y:0})
.fromTo(cardR, 1,{opacity: 0, x:-50}, {opacity:1, x:0})
.fromTo(cardL, 1,{opacity: 0, x:50}, {opacity:1, x:0},"-=1");

// PROJECT PAGE ANIMATION - ON CLICK
const projects = document.getElementById('project-button');

projects.addEventListener('click', function() {

    const cardR = document.querySelector('.c-right');
    const cardM = document.querySelector('.c-mid');
    const cardL = document.querySelector('.c-left');


    const tlMain = new TimelineMax();

    tlMain.fromTo(cardM, 1.2,{opacity: 0, y:40}, {opacity:1, y:0})
    .fromTo(cardR, 1,{opacity: 0, x:-50}, {opacity:1, x:0})
    .fromTo(cardL, 1,{opacity: 0, x:50}, {opacity:1, x:0},"-=1");
    
});


// ABOUT PAGE TEXT WRITER 
(function runTyper() {
    
    const text = document.querySelector('.about-tech');
    const textTyped = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'SVG'];

    let wordIndex = 0;
    let charIndex = 0;

    const typingDelay = 200;

    function type() {
        if (charIndex < textTyped[wordIndex].length) {
            text.textContent += textTyped[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else{
            setTimeout(erase, typingDelay+500);
        }
    };

    function erase() {
        if (charIndex >= 0) {
            text.textContent = textTyped[wordIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(erase, typingDelay-100);  
        }
        else{
            wordIndex++;

            if (wordIndex >= textTyped.length) {
                wordIndex = 0;
            }
            setTimeout(type, typingDelay);
        }
    };

    type();



})();

// ABOUT PAGE ANIMATION - ON LOAD
const contact = document.querySelector('.about-contact');
const about = document.querySelector('.about');

const tlAbout = new TimelineMax();

tlAbout.fromTo(about, 1.5,{opacity: 0, x:-40}, {opacity:1, x:0, ease:Power2.easeInOut})
.fromTo(contact, 1,{opacity: 0, scale:0}, {opacity:1, scale:1});


// HOME PAGE ANIMATION - ON CLICK from NAVBAR
const navHome = document.getElementById('nav-home');
navHome.addEventListener('click', function() {

    const button = document.querySelector('.wButton');
    const carousel = document.querySelector('.slide');
    const wText = document.querySelector('.wText');


    const tl = new TimelineMax();

    tl.fromTo(button, 2.75, {opacity: 0}, {opacity:0 })
    .fromTo(button, 0.75, {opacity: 0}, {opacity:1 },'=-0.75')
    .fromTo(button, 2, {y: -600, rotation: 45}, {y:0, rotation: 0 , ease:Power2.easeInOut},'=-1')
    .fromTo(carousel, 2,{opacity: 0, y:-500}, {opacity:1, y:0, ease:Power2.easeInOut},'=-1');
    
});


// PROJECTS PAGE ANIMATION - ON CLICK from NAVBAR
const navProjects = document.getElementById('nav-projects');
navProjects.addEventListener('click', function() {

    const cardR = document.querySelector('.c-right');
    const cardM = document.querySelector('.c-mid');
    const cardL = document.querySelector('.c-left');


    const tlPro = new TimelineMax();

    tlPro.fromTo(cardM, 1.2,{opacity: 0, y:40}, {opacity:1, y:0})
    .fromTo(cardR, 1,{opacity: 0, x:-50}, {opacity:1, x:0})
    .fromTo(cardL, 1,{opacity: 0, x:50}, {opacity:1, x:0},"-=1");
    
});

// ABOUT PAGE ANIMATION - ON CLICK from NAVBAR
const navAbout = document.getElementById('nav-about');
navAbout.addEventListener('click', function() {

    const contact = document.querySelector('.about-contact');
    const about = document.querySelector('.about');
    
    const tlAbout = new TimelineMax();
    
    tlAbout.fromTo(about, 1.5,{opacity: 0, x:-40}, {opacity:1, x:0, ease:Power2.easeInOut})
    .fromTo(contact, 1,{opacity: 0, scale:0}, {opacity:1, scale:1},"-=0.5");

});




