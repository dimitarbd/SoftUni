import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { showDashboardView } from "./views/dashboardView.js";

let root = document.querySelector("div[data-id='root']");
let userNav = document.getElementById("user");
let guestNav = document.getElementById("guest");

page(updateCTX)
page("/", showDashboardView);
page("/dashboard", showDashboardView);
page("/create", () => console.error("create"));
page("/details/:id", () => console.error("details"));
page("/edit/:id", () => console.error("edit"));
page("/login", () => console.error("myFurniture"));
page("/register", () => console.error("dashboard"));
page("/logout", () => console.error("dashboard"));

page.start()

function renderer(temp) {
    render(temp, root)
}

function updateCTX(ctx, next) {
    ctx.render = renderer
    next();
}