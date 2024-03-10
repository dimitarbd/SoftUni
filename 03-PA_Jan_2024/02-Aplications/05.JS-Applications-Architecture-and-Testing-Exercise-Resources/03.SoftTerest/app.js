import { logout } from "./src/api/userService.js";
import { hasUser, removeUser } from "./src/utils/userUtils.js";
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";

document.querySelectorAll("div[data-selection='section']").forEach(div => div.remove());

const main = document.querySelector("main")
const nav = document.querySelector("nav");
nav.addEventListener("click", onNavigate);
updateNav();

const routes = {
    "/": () => console.error("home"),
    "/home": () => console.error("home"),
    "/dashboard": () => console.error("dashboard"),
    "/create": () => console.error("create"),
    "/login": showLoginView,
    "/register": showRegisterView,
    "/details": () => console.error("details"),
    "/logout": async () =>{
        await logout();
        updateNav();
        removeUser();
        goTo("/");
    } ,
    "*": () => console.error("404 Page not found"),
}

function updateNav() {
    const user = hasUser();
    let guestAn = document.querySelectorAll("a[data-permission='guest']");
    let userAn = document.querySelectorAll("a[data-permission='user']");

    if (user) {
        guestAn.forEach(a => a.style.display = "none");
        userAn.forEach(a => a.style.display = "block");
    } else {
        guestAn.forEach(a => a.style.display = "block");
        userAn.forEach(a => a.style.display = "none");
    }
}

function renderer(view) {
    main.replaceChildren(view)
}

function onNavigate(e) {
    e.preventDefault();
    let element = e.target;
    if (e.target.tagName !== "A" && e.target.tagName !== "IMG") {
        return
    }

    if (e.target.tagName == "IMG") {
        element = e.target.parentElement;
    }

    let viewName = new URL(element.href).pathname;
    goTo(viewName)
}

let ctx = {
    render: renderer,
    goTo,
    updateNav
};

function goTo(name) {
const handler = routes[name];
if (typeof(handler) !== "function") {
    return routes["*"]();
}
    handler(ctx);
}