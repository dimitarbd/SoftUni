import { api } from "./requester";


let BASE_URL = "http://localhost:3030/";
let endpoints = {
    teams : "data/teams",
    members: "data/members"
}

async function getAllTeams() {
    return await api.get(BASE_URL + endpoints.teams)
}

export let dataService = {
    getAllTeams
}