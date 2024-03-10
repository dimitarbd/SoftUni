
const registerSection = document.querySelector("div[data-view-name='register']");
const form = registerSection.querySelector("form").addEventListener("submit", onsubmit);


export function showRegisterView(ctx) {
    ctx.render(registerSection);
};

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let { email, password, repeatPassword } = Object.fromEntries(formData);

    if (email.length < 3 || password <3 || password !== repeatPassword) {
        return alert("Register error");
    }
}