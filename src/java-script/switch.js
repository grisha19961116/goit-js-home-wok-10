export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchThem = document.querySelector('.switch');
const changeHueForBody = document.querySelector('body');
const changeValueForInput = document.querySelector('.js-switch-input');
window.addEventListener('DOMContentLoaded', ev => {
  const savedSettings = localStorage.getItem('them');
  const parsedSettings = JSON.parse(savedSettings);
  if (parsedSettings === Theme.LIGHT) {
    changeHueForBody.classList.add(Theme.LIGHT);
    changeValueForInput.checked = false;
  } else if (parsedSettings === Theme.DARK) {
    changeHueForBody.classList.add(Theme.DARK);
    changeValueForInput.checked = true;
  } else {
    changeHueForBody.classList.add(Theme.LIGHT);
    changeValueForInput.checked = false;
  }
});

switchThem.addEventListener('change', switchThemEvent);
function switchThemEvent() {
  if (changeHueForBody.classList.contains(Theme.LIGHT)) {
    changeHueForBody.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('them', JSON.stringify(Theme.DARK));
    return;
  }
  if (changeHueForBody.classList.contains(Theme.DARK)) {
    changeHueForBody.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('them', JSON.stringify(Theme.LIGHT));
    return;
  }
}
// Realize functional for switch them during (event "change") on checkbox input.js-switch-input in toolbar .
// Base them is light.
// During them change are necessary on element "body" class "light-them" or "dark-them" .
// Chosen them has to save between page reload .For save active them use localStorage .
// If them is dark during download page , don't forgot property "checked" in checkbox input.js-switch-input on "true".
// For switcher move to right position.
// For comfortable save them list use like this naming "Them".
