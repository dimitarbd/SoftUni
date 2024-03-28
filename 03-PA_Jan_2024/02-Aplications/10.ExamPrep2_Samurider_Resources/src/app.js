import { page } from './lib.js';
import { showHomeView } from './views/homeView.js';
import { showRegisterView } from './views/registerView.js';

page('/', showHomeView);
page('/register', showRegisterView);

page.start();

