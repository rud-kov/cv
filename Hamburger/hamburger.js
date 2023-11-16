export const hamburgerOpen = () => {
    mobileNav.classList.toggle("header__mobile__nav--closed");
    hamburgerLineOne.classList.toggle("hamLineOneOpen");
    hamburgerLineTwo.classList.toggle("hamLineTwoOpen");
    hamburgerLineThree.classList.toggle("hamLineThreeOpen");
  };
  
export const hamburgerClose = () => {
    mobileNav.classList.add("header__mobile__nav--closed");
    hamburgerLineOne.classList.remove("hamLineOneOpen");
    hamburgerLineTwo.classList.remove("hamLineTwoOpen");
    hamburgerLineThree.classList.remove("hamLineThreeOpen"); 
  };
  
  
  const hamburger = document.querySelector(".mobile__hamburger").addEventListener("click", hamburgerOpen);
  
  const hamburgerLineOne = document.querySelector(".hamburger__line--one");
  
  const hamburgerLineTwo = document.querySelector(".hamburger__line--two");
  
  const hamburgerLineThree = document.querySelector(".hamburger__line--three");
  
  const mobileNav = document.querySelector(".header__mobile__nav");
  
