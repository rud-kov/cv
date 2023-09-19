console.log("Spirit of this Machine, heed my will");

/////////////////////////////////// HAMBURGER MENU 

const hamburgerSwitch = () => {

  mobileHeader.classList.toggle("header__mobile__nav--closed");

  hamburgerLineOne.classList.toggle("hamLineOneOpen");

  hamburgerLineTwo.classList.toggle("hamLineTwoOpen");

  hamburgerLineThree.classList.toggle("hamLineThreeOpen");
};

const hamburger = document.querySelector(".mobile__hamburger").addEventListener("click", hamburgerSwitch);

const hamburgerLineOne = document.querySelector(".hamburger__line--one");

const hamburgerLineTwo = document.querySelector(".hamburger__line--two");

const hamburgerLineThree = document.querySelector(".hamburger__line--three");

const mobileHeader = document.querySelector(".header__mobile__nav");

//////////////////////////////////////// HOMESCREEN WRITINGS

const textDisplay = document.querySelector(".home__subheadline");

let phrases = ['I am a Coder', 'and a Copywriter', 'also an Idea Maker'];

let i = 0;

let j = 0;

let currentPhrase = [];

let isDeleting = false;

let isEnd = false;


const loop = () => {
  
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('');

  
    if (i < phrases.length) {
  
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
      }
  
      if(isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        textDisplay.innerHTML = currentPhrase.join('')
      }
  
      if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
      }
  
      if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
          i = 0
        }
      }
    }

    const spedUp = Math.random() * (50 -20) + 20
    const normalSpeed = Math.random() * (150 -50) + 50
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
  }

loop();

///////////////////////////////////////// TOGGLING MAIN ELEMENTS


const main = document.querySelectorAll(".main");

const switcher = document.querySelectorAll(".header__link");

switcher.forEach(function(element) {

  element.addEventListener("click", function() {

    const target = element.getAttribute("data-target");

    main.forEach(function(div) {

      if (div.id === target) {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
    });
  });
});


const contact = document.querySelector(".main--contact");

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 980px)");
  mq.addEventListener("change", WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {

  if (mq.matches) {
    main.forEach(function(div) {
      div.style.display = "flex";
      contact.style.display = "none";
    });
  } else {
      main.forEach(function(div) {
        if (div.id !== "main1") { 
          div.style.display = "none";
        }
      });
  }
};