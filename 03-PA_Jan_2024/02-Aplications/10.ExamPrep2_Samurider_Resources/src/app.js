import { page } from './lib.js';
import { showHomeView } from './views/homeView.js';

page('/', showHomeView);

page.start();

