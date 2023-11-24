import { loop } from "./Loop/loop.js";

import {tileSwitchOn, tileSwitchOff, Hiding, Opening} from "./ToggleMain/toggling.js";

import { hamburgerClose } from "./Hamburger/hamburger.js";

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


window.addEventListener('hashchange', function() {

  const desktopWidth = window.matchMedia("(min-width: 980px)");

  if (desktopWidth.matches) {

    const href = window.location.href

    main.forEach(function(div) {
      if (href.includes(div.id)) {
        Opening(div);
        tileSwitchOn(div.id);
      } else {
        Hiding(div);
      }
    })
  }
});