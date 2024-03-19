import { clearUserData, getUserData } from " ../util.js";

let host = 'http://localhost:3000';

async function request(method, url, data) {
    let options = {
        method, 
        headers: {}
    };

    if (data !=undefined) {
        options.headers['Content-Type'] = 'applicatin/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();
    if(userData) {
        options.header['X-Authorization'] = userData.accessToken;
    }
}