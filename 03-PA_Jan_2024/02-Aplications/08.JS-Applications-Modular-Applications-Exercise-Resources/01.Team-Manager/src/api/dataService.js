import { api } from "./requester";


let BASE_URL = "http://localhost:3030/";
let endpoints = {
    teams : "data/teams",
    members: "data/members"
}

async function getAllTeams() {
    return await api.get(BASE_URL + endpoints.teams)
}

async function createNewTeam() {
    return api.post(BASE_URL + endpoints.teams, data);
}

async function getSingleTeam(id) {
    return await api.get(`${BASE_URL}${endpoints.teams}/${id}`)
}

async function editTeam(data, id) {
    return api.put(`${BASE_URL}${endpoints.teams}/${id}`, data)
}

export let dataService = {
    getAllTeams,
    createNewTeam, 
    getSingleTeam,
    editTeam
}