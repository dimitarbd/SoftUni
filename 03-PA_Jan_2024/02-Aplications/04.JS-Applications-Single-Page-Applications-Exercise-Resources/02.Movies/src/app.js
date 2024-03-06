document.querySelectorAll("section").forEach(section => section.style.display="none");
let userNav = document.querySelectorAll("li.user");
let guestNav = document.querySelectorAll("li.guest");

let userData = JSON.parse(sessionStorage.getItem("userData"));

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