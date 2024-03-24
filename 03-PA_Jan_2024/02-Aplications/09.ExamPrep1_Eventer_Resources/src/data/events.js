import { get, post } from './request.js';

let endpoints = {
    dashboard: '/data/events?sortBy=_createdOn%20desc',
    events: '/data/events',
    details: '/data/events/'
};

export async function getAllEvents() {
    return get(endpoints.dashboard);
}

export async function getEventById(id) {
    return get(endpoints.details + id);
}

export async function createEvent(name, imageUrl, category, description, date) {
    return post(endpoints.events, {
        name,
        imageUrl,
        category,
        description,
        date
    });
}