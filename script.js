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

import { tileSwitchOff, tileSwitchOn, hideFast, Hiding, Opening, widthChange, OpenFast } from "./ToggleMain/toggling.js";


window.addEventListener('hashchange', function() {

  const desktopWidth = window.matchMedia("(min-width: 980px)");

  if (desktopWidth.matches) {

    const href = window.location.href

    main.forEach(function(div) {
      if (href.includes(div.id)) {
        Opening(div);
      } else {
        Hiding(div);
      }
    })
  }
});


/// ZJISTIT PROC BY TOHLE NESLO DPC: 


//window.addEventListener("change", function() {
//
//  const mq = window.matchMedia("(max-width: 980px)")
//
//  if (mq.matches) {
//
//    main.forEach(function(div) {
//      OpenFast(div);
//      contact.classList.replace("openNoAnimation", "display--off");
//    })
//  } else {
//    main.forEach(function(div) {
//      if (div.id !== "home") {
//        hideFast(div)
//        tileSwitchOff();
//      };
//    });
//  };
//});