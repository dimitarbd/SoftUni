const view = document.querySelector("div[data-view-name='login']");

let context = null;
export function showLoginView(ctx) {
    context = ctx;
    context.render(view);
}