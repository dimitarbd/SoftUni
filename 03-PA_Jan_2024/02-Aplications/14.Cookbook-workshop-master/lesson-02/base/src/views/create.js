import { html } from '@lit-html/lit-html.js';

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
