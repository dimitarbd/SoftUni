import page from '@page/page.mjs';
import { html, render} from '@lit-html/lit-html.js';
import { showExample } from './views/example.js';

page('/', showExample);

page.start();

render(html`<h1>Hello world!</h1>`, document.querySelector('main'));