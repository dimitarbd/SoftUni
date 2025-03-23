import requester from "./requester";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => await requester.post(`${BASE_URL}/login`, { email, password });

export const register = async (email, password) => await requester.post(`${BASE_URL}/register`, { email, password });