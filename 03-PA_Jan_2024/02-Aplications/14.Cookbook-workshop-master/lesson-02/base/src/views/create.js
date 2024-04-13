import { html } from '@lit-html/lit-html.js';
import { createSubmitHandler } from '@src/util';

const createTemp = (handler) => html`
    <section id="create">
            <article>
                <h2>New Recipe</h2>
                <form @submit=${handler}>
                    <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
                    <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
                    <label class="ml">Ingredients: <textarea name="ingredients"
                            placeholder="Enter ingredients on separate lines"></textarea></label>
                    <label class="ml">Preparation: <textarea name="steps"
                            placeholder="Enter preparation steps on separate lines"></textarea></label>
                    <input type="submit" value="Create Recipe">
                </form>
            </article>
        </section>
`;

let userData = null;
/**
 * @param {import("@src/types").PageContext} ctx
 */
export function showCreate(ctx) {
    ctx.render(createTemp(createSubmitHandler(onCreate))
    userData = ctx.user;
)
}

function onCreate(data, form) {
    
}