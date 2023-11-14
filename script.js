
import { loop } from "./loop/loop.js";

loop();

import { hamburgerOpen, hamburgerClose } from './hamburger/hamburger.js';

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

const mobileHeader = document.querySelector(".header--mobile");

import { tileSwitchOff, tileSwitchOn, hideFast, Hiding, Opening, widthChange } from "./toggleMain/toggling.js";