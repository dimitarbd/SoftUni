import { page } from "./lib.js";
import { showExample } from "./views/example.js";
import * as api from "./data/request.js"

page('/', showExample);

page.start();

window.api = api;