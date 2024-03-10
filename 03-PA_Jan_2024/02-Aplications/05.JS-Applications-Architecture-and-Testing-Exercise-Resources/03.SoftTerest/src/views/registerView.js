
const registerSection = document.querySelector("div[data-view-name='register']");
const form = registerSection.querySelector("form").addEventListener("submit", onsubmit);


export function showRegisterView(ctx) {
    ctx.render(registerSection);
};

