async function request(method, url, data) {
    const option = {
        method
    };
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const headers = {
        "Content-type": "application/json"
    }

    if (userData) {
        headers["X-Authorization"] = userData.accesToken;
    }

    option[headers] = headers;

    if (data) {
        option.body = JSON.stringify(data);
    }

    const response = await fetch(url, option);
    const responseData = await response.json();
    return responseData;
}

const get = (url) => {
    return request("GET", url)
}
const post = (url, data) => {
    return request("POST", url, data);
}
const update = (url, data) => {
    return request("PUT", url, data);
}
const del = (url) => {
    return request("DELETE", url);

}

export {
    get, 
    post, 
    update, 
    del
}