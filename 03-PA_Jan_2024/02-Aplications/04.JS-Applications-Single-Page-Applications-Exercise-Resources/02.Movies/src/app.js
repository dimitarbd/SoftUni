import { getUserData } from "./util";

const host = 'http://localhost:3030'

async function request(method, url, data) {
    const options = {
        method, 
        headers: {}
    }

    if(data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }
}