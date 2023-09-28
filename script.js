console.log("Spirit of this Machine, heed my will");

/////////////////////////////////// HAMBURGER MENU 

const hamburgerOpen = () => {

  mobileNav.classList.toggle("header__mobile__nav--closed");
  hamburgerLineOne.classList.toggle("hamLineOneOpen");
  hamburgerLineTwo.classList.toggle("hamLineTwoOpen");
  hamburgerLineThree.classList.toggle("hamLineThreeOpen");
};

const hamburgerClose = () => {
  mobileNav.classList.add("header__mobile__nav--closed");
  hamburgerLineOne.classList.remove("hamLineOneOpen");
  hamburgerLineTwo.classList.remove("hamLineTwoOpen");
  hamburgerLineThree.classList.remove("hamLineThreeOpen"); 
}

const hamburger = document.querySelector(".mobile__hamburger").addEventListener("click", hamburgerOpen);

const hamburgerLineOne = document.querySelector(".hamburger__line--one");

const hamburgerLineTwo = document.querySelector(".hamburger__line--two");

const hamburgerLineThree = document.querySelector(".hamburger__line--three");

const mobileNav = document.querySelector(".header__mobile__nav");

///////////////// HEADER ROLL_UP & DOWN /////////////


let lastScrollPosition = 0;

window.addEventListener("scroll", () => {

  let currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > 215 && currentScrollPosition > lastScrollPosition) {
    mobileHeader.style.transform = "translateY(-600px)";
    hamburgerClose();      
  } else {
    mobileHeader.style.transform = "translateY(0)";
    hamburgerClose();   
  }

  lastScrollPosition = currentScrollPosition;
});

const mobileHeader = document.querySelector(".header--mobile");

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
        imOpenin(div);
      } else {
        div.classList.replace("open", "hide");
      }
    });
  });
});


const imOpenin = (div) => {
  setTimeout(function() {
    div.classList.remove("hide")
    div.classList.add("open")
  }, 550)
}

const imHidin = (div) => {
  setTimeout(function() {
    div.classList.remove("hideFast");
    div.classList.add("hide");
  }, 5)
}

const contact = document.querySelector(".main--contact");

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 980px)");
  mq.addEventListener("change", WidthChange);
  WidthChange(mq); 
}

function WidthChange(mq) {

  if (mq.matches) {
    main.forEach(function(div) {
      div.classList.replace("hide", "open")
      contact.classList.replace("open", "hide");
    });
  } else {
      main.forEach(function(div) {
        if (div.id !== "main1") {
          div.classList.replace("open", "hideFast");
          imHidin(div);
       }
    })
  }
};
