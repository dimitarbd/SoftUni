import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipes } from "../data/recipes.js";

let loader = () => html `<p>Loading &hellip;</p>`;

let catalogTemplate = (recipes) => html `
<h1> Recipes Catalog</h1>
<ul>
    <li>R1</li>
    <li>R2</li>
</ul>
`;

export async function showCatalog(ctx) {
    render(loader());

    let recipes = await getRecipes();

    render(catalogTemplate(recipes));
}