import { get } from './request.js';

export async function getAllRecipes() {
    return get(endpoints.recipes);
}

/**
 * @param {string} id
 * @returns {Promise<RecipeModel>}
 */
