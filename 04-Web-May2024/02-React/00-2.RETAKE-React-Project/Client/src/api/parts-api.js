import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/car-parts'

export const getAll = async () => {
    const result = await requester.get(BASE_URL);    

    const parts = Object.values(result);

    return parts;
};

export const getOne = (partId) => requester.get(`${BASE_URL}/${partId}`);

const partsAPI = {
    getAll,
    getOne
};

export default partsAPI;

