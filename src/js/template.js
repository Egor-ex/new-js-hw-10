import menuTemplate from '../templates/menu.hbs';
import data from '../menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMurkup = createMenuMurkup(data);

console.log(menuTemplate(data));

function createMenuMurkup(e) {
  // До изменения menu.hbs
  //   return e.map(menu => menuTemplate(menu)).join('');
  //   return e.map(menuTemplate).join('');

  // После изменения menu.hbs методом всьроенным в хенлбар - #each
  return menuTemplate(data);
}

menuRef.insertAdjacentHTML('beforeend', menuMurkup);

// Тема

// const body = document.querySelector('body');
// const checkbox = document.querySelector('#theme-switch-toggle');

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// function setThemeOnLoad() {
//   if (localStorage.getItem('theme')) {
//     body.classList.add(localStorage.getItem('theme'));
//     if (localStorage.getItem('theme') === Theme.DARK) {
//       checkbox.checked = true;
//     } else {
//       checkbox.checked = false;
//       body.classList.add(Theme.LIGHT);
//     }
//   } else {
//     body.classList.add(Theme.LIGHT);
//   }
// }
// setThemeOnLoad();

// checkbox.addEventListener('change', changeColorTheme);

// function changeColorTheme(e) {
//   body.classList.toggle(Theme.DARK);
//   body.classList.toggle(Theme.LIGHT);
//   if (e.target.checked) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }
