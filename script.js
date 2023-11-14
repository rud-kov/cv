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

const hamburger = document.querySelector(".mobile__hamburger").addEventListener("click", hamburgerOpen);

const hamburgerLineOne = document.querySelector(".hamburger__line--one");

const hamburgerLineTwo = document.querySelector(".hamburger__line--two");

const hamburgerLineThree = document.querySelector(".hamburger__line--three");

const mobileNav = document.querySelector(".header__mobile__nav");

const mobileHeader = document.querySelector(".header--mobile");

//////////////////////////////////////// HOMESCREEN WRITINGS

const textDisplay = document.querySelector(".home__subheadline");

let phrases = ['I am a Coder','and a Copywriter','also an Idea Maker'];

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

    const spedUp = Math.random() * (50 -20) + 20;
    const normalSpeed = Math.random() * (150 -50) + 50;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time)
  }

loop();

///////////////////////////////////////// TOGGLING MAIN ELEMENTS

const main = document.querySelectorAll(".main");

const switcher = document.querySelectorAll(".header__link");

const tile = document.querySelectorAll(".header__tile");

const homeScreen = document.getElementById("homeScreen");

const contact = document.querySelector(".main--contact");

switcher.forEach(function(element) {

  element.addEventListener("click", function() {

    const target = element.getAttribute("data-target");

    main.forEach(function(div) {

      if (div.id === target) {
        Opening(div);
        tileSwitchOn(target);
      } else {
        Hiding(div);
      }
    });
  });
});

const Opening = (div) => {
  setTimeout(function() {
    div.classList.remove("hideAnimation", "display--off")
    div.classList.add("open")
  }, 750)
}

const Hiding = (div) => {
  div.classList.replace("open", "hideAnimation");
  setTimeout(function() {
    div.classList.add("display--off");
  }, 750)
}


const hideFast = (div) => {
  div.classList.remove("open", "openNoAnimation", "hideAnimation");
  div.classList.add("display--off");
}

const tileSwitchOn = (target) => {
  tile.forEach(function(li) {
    if (li.getAttribute("data-target") === target) {
      li.classList.add("header__tile--focused", "header__tile--hovered"); 
    } else {
      li.classList.remove("header__tile--focused", "header__tile--hovered");
    }
  });
}

const tileSwitchOff = (li) => {
  tile.forEach(function(li) {
    li.classList.remove("header__tile--focused", "header__tile--hovered");
  });
  homeScreen.classList.add("header__tile--focused", "header__tile--hovered");
};

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 980px)");
  mq.addEventListener("change", widthChange);
  widthChange(mq); 
}

function widthChange(mq) {

  if (mq.matches) {
    main.forEach(function(div) {
      div.classList.remove("hideAnimation", "display--off");
      div.classList.add("openNoAnimation");
      contact.classList.replace("openNoAnimation", "display--off");
    });
  } else {
      main.forEach(function(div) {
        if (div.id !== "home") {
          hideFast(div);
          tileSwitchOff();
       }
    })
  }
};