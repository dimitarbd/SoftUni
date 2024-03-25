import { logout } from './data/users.js';
import { page } from './lib.js';
import { getUserData, updateNav } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

updateNav();

page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);


page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
});