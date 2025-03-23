import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/car-parts';

const buildUrl = (partId) => `${BASE_URL}/${partId}/comments`;

const create = async (partId, email, text, rating, currentDate) => requester.post(buildUrl(partId), { email, text, rating, currentDate });

const getAll = async (partId) => {
    const result = await requester.get(buildUrl(partId));

    const comments = Object.values(result);

    return comments;
}

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;