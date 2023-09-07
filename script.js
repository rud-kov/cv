console.log("Spirit of this Machine, heed my will");



//////////////////////////////////////// HOMESCREEN WRITINGS

const textDisplay = document.querySelector(".home__subheadline");

const phrases = ['I am a Coder', 'and a Copywriter', 'also an Idea Maker :)'];

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


let counter = 0

switcher.forEach(function(element) {

  element.addEventListener("click", function() {

    const target = element.getAttribute("data-target");

    main.forEach(function(div) {

      if (div.id === target) {
        div.classList.remove("hide")
        div.classList.add("show")
        //div.classList.replace("hide", "show")
        // div.classList.toggle("show")
        setTimeout(function() {
          div.style.display = "flex";
        },700);
      } else {
        div.classList.remove("show")
        div.classList.add("hide")
        //div.classList.replace("show", "hide")
        //div.classList.toggle("hide")
        setTimeout(function() {
          div.style.display = "none";
        }, 700);
      } 
    });
  });
});
