import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/custom-elemen/hero';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipToContent = document.querySelector('.skip-link');
const maincontent = document.querySelector('#maincontent');

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('hero-section'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipToContent.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    maincontent.focus();
  }
});
