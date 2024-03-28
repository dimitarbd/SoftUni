import { get } from './request.js';

let endpoints = {
    allMotorcycles: '/data/motorcycles?sortBy=_createdOn%20desc',
};

export async function getAllMotorcycles() {
    return await get(endpoints.allMotorcycles);
}