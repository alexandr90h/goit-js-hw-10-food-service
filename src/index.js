import './styles.css';
import menuObj from './menu.json';
import listMenuTmpl from './templates/list-menu.hbs';
// listMenuTmpl(menuObj[0]);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkBoxThemeElem = document.querySelector('#theme-switch-toggle');
const bodyElem = document.querySelector('body');
const conteinerListMenuElem = document.querySelector('.js-menu');
checkBoxThemeElem.addEventListener('change', changeTheme);
conteinerListMenuElem.insertAdjacentHTML('beforeend', renderObj);
if (localStorage.getItem('theme') === 'true') {
  checkBoxThemeElem.checked = true;
  bodyElem.classList.add(Theme.DARK);
} else {
  checkBoxThemeElem.checked = false;
  bodyElem.classList.add(Theme.LIGHT);
}
function changeTheme(evt) {
  localStorage.setItem('theme', evt.target.checked);
  if (localStorage.getItem('theme') === 'false') {
    bodyElem.classList.replace(Theme.DARK, Theme.LIGHT);
  } else if (localStorage.getItem('theme') === 'true') {
    bodyElem.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
function renderObj(menuObj) {
  return menuObj.map(listMenuTmpl).join('');
}
// console.log(localStorage.getItem('theme'));
// console.log(menuObj[0].name);
