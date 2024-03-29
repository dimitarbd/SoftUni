import { api } from "./requester.js";


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

async function getListMember(teamId) {
    return await api.get(`${BASE_URL}/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers}`)
}

async function requestToJoin(teamId) {
    return await api.post(`${BASE_URL}${endpoints.members}`, { teamId })
}

async function approveRequest(id, data) {
    return await api.put(`${BASE_URL}${endpoints.members}/${id}`, data)
}

export let dataService = {
    getAllTeams,
    createNewTeam, 
    getSingleTeam,
    editTeam,
    getListMember,
    requestToJoin,
    approveRequest
}