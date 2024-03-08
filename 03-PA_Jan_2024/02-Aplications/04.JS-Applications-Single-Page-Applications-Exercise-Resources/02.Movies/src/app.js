import {showRegisterView} from "./register.js"
import {showHome} from "./home.js"


document.querySelectorAll("section").forEach(section => section.style.display="none");
let userNav = document.querySelectorAll("li.user");
let guestNav = document.querySelectorAll("li.guest");
document.querySelector("nav").addEventListener("click", onNavigate);

let userData = JSON.parse(sessionStorage.getItem("userData"));

const routes = {
    "/register": showRegisterView,
    "/home": showHome
}

function onNavigate (e) {
    if (e.target.tagName !== "A" || !e.target.href) {
        return
    }
    e.preventDefault();
    let url = new URL(e.target.href);
    let path = url.pathname;
    routes[path]();
}

function updateNav() {
    if (userData) {
        userNav.forEach(li =>{
            li.style.display = "block"
        })

        guestNav.forEach(li =>{
            li.style.display = "none"
        })
        
    } else {
        userNav.forEach(li =>{
            li.style.display = "none"
        })

        guestNav.forEach(li =>{
            li.style.display = "block"
        })
    }
}

updateNav();