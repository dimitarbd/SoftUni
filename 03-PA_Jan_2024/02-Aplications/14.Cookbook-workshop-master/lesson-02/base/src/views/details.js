import { html, render } from '@lit-html/lit-html.js';

/**
 * @param {import("@src/data/recipes").RecipeModel} item
 * @returns {Object}
 */

const detailsTemp = () => html`
    <section id="details">
            <p style="color: white">Loading...</p>
        </section>
`;

export function showDetails(ctx) {
    ctx.render(detailsTemp(null));
}

