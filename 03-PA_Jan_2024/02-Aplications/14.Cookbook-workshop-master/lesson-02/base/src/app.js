import page from '@page/page.mjs';
import { html, render} from '@lit-html/lit-html.js';
import { showExample } from '@src/views/example.js';
import { session } from './middleware/session.js';
import { showRegister } from './register.js';

import * as api from '@src/data/users.js';
import { renderer } from './middleware/render.js';
import { showLogin } from './views/login.js';
import { updateUserNav } from './util.js';
import { showCreate } from './views/create.js';
window['api'] = api;

page(session());
page(renderer(document.querySelector('main')));
page('/', loading(), preload('recipes'), showCatalog);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/details', showDetails);


page.start();
updateUserNav();

export function goTo(path) {
    page.redirect(path);
}

