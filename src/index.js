import './reset.css';
import './styles.css';
import homePage from './initial-page-load';
import menu from './menu';
import contact from './contact';

homePage();

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");

homeButton.addEventListener("click", (e) => {
    homePage();
});
menuButton.addEventListener("click", (e) => {
    menu();
});
contactButton.addEventListener("click", (e) => {
    contact();
})