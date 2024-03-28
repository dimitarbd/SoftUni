import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let registerTemplate = (onSubmit) => html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`; 

export function showRegisterView(ctx) {
    let handler = createSubmitHandler(onSubmit);
    render(registerTemplate(handler));
}

async function onSubmit(data, form) {
    if(!data.email || !data.password || data.password !== data['re-password']) {
        return alert('Invalid input');
    }
    register(data.email, data.password);
    page.redirect('/');
}