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

  const href = window.location.href

  main.forEach(function(div) {
    if (href.includes(div.id)) {
      Opening(div);
    } else {
      Hiding(div);
    }
  })
});


// window.addEventListener('hashchange', function() {
// 
//   const desktopWidth = window.matchMedia("(min-width: 980px)");
// 
//   console.log(desktopWidth)
// 
//   const href = window.location.href
// 
//   main.forEach(function(div) {
//     if ((href.includes(div.id)) && (desktopWidth === true)) {
//       Opening(div);
//     } else {
//       Hiding(div);
//     }
//   })
// });



// if (matchMedia) {
//   const desktopWidth = window.matchMedia("(min-width: 980px)");
//   desktopWidth.addEventListener("hashchange", changeHash);
//   changeHash(desktopWidth); 
// }
// 
// function changeHash(desktopWidth) {
// 
//     if (desktopWidth.matches) {
//       console.log("frčim typičo");
//       const href = window.location.href 
//       main.forEach(function(div) {
//         if (href.includes(div.id)) {
//           Opening(div);
//         } else {
//           Hiding(div);
//         }
//     });
//   }
// }


