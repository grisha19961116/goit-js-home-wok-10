import './styles.css';
import './java-script/switch.js';
import objectData from './menu.json';
import menuTemplate from './templates/gallery.hbs';
const markup = menuTemplate(objectData);
const readyRenderingUl = document.querySelector('.js-menu');
readyRenderingUl.insertAdjacentHTML('afterbegin', markup);
