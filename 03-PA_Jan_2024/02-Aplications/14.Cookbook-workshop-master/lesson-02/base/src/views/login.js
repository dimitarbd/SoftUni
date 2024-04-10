import { html } from '@lit-html/lit-html.js';
import { goTo } from '@src/app';
import { login } from '@src/data/users';
import { createSubmitHandler } from '@src/util';

const loginTemp = (handler) => html`
    <section id="login">
            <article>
                <h2>Login</h2>
                <form>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <input type="submit" value="Login">
                </form>
            </article>
        </section>
`;

/**
 * @param {import ("@src/types").PageContent} ctx
 */

export function showLogin(ctx) {
    ctx.render(loginTemp(createSubmitHandler(onLogin)));
}

async function onLogin(data, form) {
    const { email, password } = data;

    if (!email || !password) {
        return alert ('Login Error');
    }

    login(email, password);
    form.reset();
    goTo('/');

}