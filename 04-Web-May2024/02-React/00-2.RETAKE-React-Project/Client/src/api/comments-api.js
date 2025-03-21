import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/car-parts';

const buildUrl = (partId) => `${BASE_URL}/${partId}/comments`;

const create = async (partId, username, text) => {
    const result = await requester.post(buildUrl(partId), { username, text });

    const comments = Object.values(result);

    return comments;
};

export default {
    create
};