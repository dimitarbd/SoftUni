import { get, post } from "./api.js";

export async function getRecipes(search) {
    let url = "/data/recipes";

    if(search) {
        url += '?where=' + encodeURIComponent(`name LIKE "${search}"`);
    }
    return get(url);
}