import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

import buttonStyles from './button.module.css';
import imageStyles from './image.module.css';
import image from './PhotoRoom.png';

import { user } from './data.json';

const modules = import.meta.glob( './modules/*.js' );
console.log(modules);
for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Andrés!</h1>
    <img id="img" />
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <pre>${JSON.stringify(user)}</pre>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

document.getElementById('counter').className = buttonStyles.btn;

const imagen = document.getElementById('img');
imagen.src = image;
imagen.className = imageStyles.img;

setupCounter(document.querySelector('#counter'))
