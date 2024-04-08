import { html, render} from '@lit-html/lit-html.js';
 
const createTemp = (handler) => html `
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

export function showRegister(ctx) {

}