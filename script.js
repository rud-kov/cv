import { loop } from "./Loop/loop.js";

loop();

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

import { hamburgerClose, hamburgerOpen } from "./Hamburger/hamburger.js";


const switcher = document.querySelectorAll(".header__link");

const main = document.querySelectorAll(".main");

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

import { tileSwitchOff, tileSwitchOn, hideFast, Hiding, Opening, widthChange } from "./ToggleMain/toggling.js";