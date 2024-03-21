import { get, post } from "./api.js";

let pageSize = 5;

export async function getRecipes(search, page) {
    let url = "/data/recipes";

    if(!page) {
        page =1;
    }
    
    if(search) {
        url += '?where=' + encodeURIComponent(`name LIKE "${search}"`);
    } else if(page) {
        url +=`?offset=${(page - 1) * pageSize}&pageSize=${pageSize}`;
    }

    return get(url);
}