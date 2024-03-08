document.getElementById("form-login").addEventListener("submit", onLogin)

export function showLogin() {
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
    document.getElementById("form-login").style.display = "block";
}

function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email")
}