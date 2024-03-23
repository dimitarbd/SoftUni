import page from "../node_modules/page/page.mjs";
import { showHomeView } from "./view/homeView.js";
import { showRegisterView } from "./view/registerView.js";


page("/", showHomeView);
page("/home", showHomeView);
page("/browse-team", ()=> console.error("browse-team"));
page("/login", ()=> console.error("login"));
page("/register", showRegisterView);
page("/my-team", ()=> console.error("my-team"));
page("/logout", ()=> console.error("logout"));

page.start();