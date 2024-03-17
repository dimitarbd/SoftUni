import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showRegisterView } from "./views/registerView.js";


let root = document.querySelector("div[data-id='root']");
let userNav = document.getElementById("user");
let guestNav = document.getElementById("guest");

page(updateCTX)
page("/", showDashboardView);
page("/dashboard", showDashboardView);
page("/create", () => console.error("create"));
page("/details/:id", () => console.error("details"));
page("/edit/:id", () => console.error("edit"));
page("/myFurniture", () => console.error("myFurniture"));
page("/login", () => console.error("login"));
page("/register", showRegisterView);
page("/logout", () => console.error("logout"));

page.start()

function renderer(temp) {
    render(temp, root)
}

function updateCTX(ctx, next) {
    ctx.render = renderer
    next();
}