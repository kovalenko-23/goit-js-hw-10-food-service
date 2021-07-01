import listOfDishes from './list-of-dishes.json';
import menuTemplate from '../src/templates/menu-template.hbs';
import './sass/main.scss';
import { even } from 'prelude-ls';

const jsMenu = document.querySelector('.js-menu');

jsMenu.innerHTML = menuTemplate(listOfDishes);

const toolBarInput = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



toolBarInput.addEventListener('change', (event) => {
    event.preventDefault();
    if (event.target.checked) {
        localStorage.setItem('Theme', Theme.DARK);
        setValidClass('dark-theme', 'light-theme');
    } else {
        localStorage.setItem('Theme', Theme.LIGHT);
        setValidClass('light-theme', 'dark-theme');
    }
});

function changeBodyTheme() {
    const currentTheme = localStorage.getItem('Theme');

    if (currentTheme) {
        body.classList.add(currentTheme);   
    }

    if (currentTheme === Theme.DARK) {
        toolBarInput.checked = true;
     }
};

function setValidClass (classToAdd, classToRemove) {
    body.classList.add(classToAdd);
    body.classList.remove(classToRemove);
}
changeBodyTheme();