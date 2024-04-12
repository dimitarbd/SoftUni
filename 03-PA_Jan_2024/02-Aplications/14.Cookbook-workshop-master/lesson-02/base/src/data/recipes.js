import { get, post } from './request.js';

export async function getAllRecipes() {
    return get(endpoints.recipes);
}

/**
 * @param {string} id
 * @returns {Promise<RecipeModel>}
 */

export async function getRecipeById(id) {
    return get(endpoints.recipeById + id);
}

/**
 * 
 * @param {RecipeModel} data
 */

export async function createRecipe(data) {
    post(endpoints.recipes, data);
}


