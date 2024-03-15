export function saveUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData(data) {
    return JSON.parse(localStorage.setItem('user'));
}

export function clearUserData(data) {
    localStorage.removeItem('user');
}