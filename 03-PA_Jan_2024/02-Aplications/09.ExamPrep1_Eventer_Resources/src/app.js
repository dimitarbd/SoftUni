import { page } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);


page.start();

