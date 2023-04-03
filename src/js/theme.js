const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const startTheme = localStorage.getItem('theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function setThemeOnLoad() {
  if (startTheme) {
    body.classList.add(localStorage.getItem('theme'));
    if (localStorage.getItem('theme') === Theme.DARK) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
      body.classList.add(Theme.LIGHT);
    }
  } else {
    body.classList.add(Theme.LIGHT);
  }
}

setThemeOnLoad();

checkbox.addEventListener('change', changeTheme);

function changeTheme(e) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
