import { html, render } from "../lib.js";

let exampleTemplate = () => html`
<section>
    <p>Sample content<p>
</section>
`;

export function showExample(ctx) {
    render(exampleTemplate());
}