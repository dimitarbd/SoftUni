import page from '@page/page.mjs';
import { html, render} from '@lit-html/lit-html.js';
import { showExample } from '@src/views/example.js';

import * as api from '@src/data/users.js';
window['api'] = api;

page('/', showExample);

page.start();

