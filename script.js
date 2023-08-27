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


const home = document.querySelector(".main--home");

const homeSwitch = document.querySelector(".header__link--intro");


const about = document.querySelector(".main--about");

const aboutSwitch = document.querySelector(".header__link--about");


const resume = document.querySelector(".main--resume");

const resumeSwitch = document.querySelector(".header__link--resume");


const contact = document.querySelector(".main--contact");

const contactSwitch = document.querySelector(".header__link--contact");


const projects = document.querySelector(".main--projects");

const projectsSwitch = document.querySelector(".header__link--projects")


const bringHomeUp = () => {


    home.classList.toggle("main--home--closed");
    about.classList.toggle("main--about--open");
}


const bringAboutUp = () => {

    home.classList.toggle("main--home--closed");
    about.classList.toggle("main--about--open");
}


const bringResumeUp = () => {

    home.classList.add("main--home--closed");
    about.classList.add("main--about--closed");

    resume.classList.toggle("main--resume--open");
}

const bringContactUp = () => {

    contact.classList.add("main--contact--open");

    home.classList.add("main--home--closed");
    about.classList.add("main--about--closed");
    resume.classList.add("main--resume--closed");

}

const bringProjectsUp = () => {

    projects.classList.add("main--projects--open");

    home.classList.add("main--home--closed");
    about.classList.add("main--about--closed");
    resume.classList.add("main--resume--closed");
    contact.classList.add("main--contact--closed");
}


projectsSwitch.addEventListener("click", bringProjectsUp);

aboutSwitch.addEventListener("click", bringAboutUp);

homeSwitch.addEventListener("click", bringHomeUp);

resumeSwitch.addEventListener("click", bringResumeUp);

contactSwitch.addEventListener("click", bringContactUp);

