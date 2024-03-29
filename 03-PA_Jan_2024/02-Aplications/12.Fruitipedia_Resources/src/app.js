import { page } from './lib.js';
import { updateNav } from './util.js';
import { showDashboardView } from './views/dashboardView.js';
import { showHomeView } from './views/homeView.js';
import { showLoginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { showRegisterView } from './views/registerView.js';


page('/', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logoutView);
page('/dashboard', showDashboardView);


page.start();
updateNav();

