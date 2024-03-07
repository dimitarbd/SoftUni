import {showRegisterView} from "./register.js"

document.querySelectorAll("section").forEach(section => section.style.display="none");
let userNav = document.querySelectorAll("li.user");
let guestNav = document.querySelectorAll("li.guest");
document.querySelector("nav").addEventListener("click", onNavigate);

let userData = JSON.parse(sessionStorage.getItem("userData"));

function onNavigate (e) {
    if (e.target.tagName !== "A" || e.target.href) {
        return
    }
    let url = new URL(e.target.href);
    let path = url.pathname;

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