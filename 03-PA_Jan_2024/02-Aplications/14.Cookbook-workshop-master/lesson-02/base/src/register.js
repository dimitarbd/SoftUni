// @ts-nocheck
import { html, render} from '@lit-html/lit-html.js';
import { createSubmitHandler } from './util.js';
 
const registerTemp = (handler) => html `
        <section id="register">
            <article>
                <h2>Register</h2>
                <form @submit=${handler}>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="rePass"></label>
                    <input type="submit" value="Register">
                </form>
            </article>
        </section>
`;

/**
 * 
 * @param {import {"@src/types"}.PageContext} ctx 
 */

export function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)));
}   

function onRegister(data, form) {
    console.error(data);
}