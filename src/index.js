import './styles.css';
import menuObj from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkBoxThemeElem = document.querySelector('#theme-switch-toggle');
const bodyElem = document.querySelector('body');
checkBoxThemeElem.addEventListener('change', changeTheme);

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
// console.log(localStorage.getItem('theme'));
// console.log(menuObj[0].name);
