import { html, render } from '@lit-html/lit-html.js';


const detailsTemp = () => html`
    <section id="details">
            <p style="color: white">Loading...</p>
        </section>
`;

export function showDetails(ctx) {
    ctx.render(detailsTemp(null));
}

