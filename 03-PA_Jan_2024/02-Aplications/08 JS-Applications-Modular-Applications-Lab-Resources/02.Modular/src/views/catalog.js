import { render, html, page } from "../lib.js";
import { getRecipes } from "../data/recipes.js";
import { parseQuery, createSubmitHandler } from "../util.js";


let loader = () => html `<p>Loading &hellip;</p>`;

let catalogTemplate = (recipes, search="", onSearch) => html `
<h1> Recipes Catalog</h1>
<form @submit=${onSearch}>
    <label> Search:<input type="text" name="search" .value=${search}></label>
</form>
<ul>
   ${recipes.map(recipeTemplate)}
</ul>
`;

let recipeTemplate = (recipe) => html `
<li>
    <p>${recipe.name}</p>
</li>
`;

export async function showCatalog(ctx) {
    let query = parseQuery(ctx.querystring);
    

    render(loader());

    let recipes = await getRecipes(query.search, Number(query.page));

    render(catalogTemplate(recipes, query.search, createSubmitHandler(onSearch)));
}

function onSearch({ search }) {
    if(!search) {
        page.redirect('/');
    } else {
        page.redirect(`?search=${search}`);
    }
}