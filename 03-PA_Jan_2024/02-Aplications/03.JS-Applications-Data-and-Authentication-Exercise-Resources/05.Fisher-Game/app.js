document.querySelector("a[id='home']").classList.add("active");
document.getElementById("logout").addEventListener("click", onLogout);
const endpoints = {
    logout: "http://localhost:3030/users/logout"}

const userNavRef = document.getElementById("user");
const guestNavRef = document.getElementById("guest");

let userData= JSON.parse(sessionStorage.getItem("userData"));

updateNav();
function updateNav() {
    if(userData) {
        document.querySelector("nav p span").textContent = userData.email;
        userNavRef.style.display = "inline-block";
        guestNavRef.style.display = "none";
    
        // document.querySelector("a[id='login']").style.display = "none";
        // document.querySelector("a[id='register']").style.display = "none";
        // document.querySelector("a[id='logout']").style.display = "inline-block";
    } else {
        document.querySelector("nav p span").textContent =  "guest";
        userNavRef.style.display = "none";
        guestNavRef.style.display = "inline-block"
    
        // document.querySelector("a[id='login']").style.display = "inline-block";
        // document.querySelector("a[id='register']").style.display = "inline-block";
        // document.querySelector("a[id='logout']").style.display = "none";
    }
}

async function onLogout(e) {
    let option = {
        method: "GET",
        header: {
            "X-Authorization": userData.accesToken
        }
    }
    await fetch(endpoints.logout, option);
    sessionStorage.clear();
    userData = null;
    updateNav();
}