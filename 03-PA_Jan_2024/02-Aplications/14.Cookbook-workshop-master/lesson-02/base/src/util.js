export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
    updateUserNav();
}

export function getUserData(data) {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
    updateUserNav();
}

function updateUserNav(ctx) {
    const guestNav = document.getElementById('guest');
    const userNav = document.getElementById('user');
    const user = getUserData();
    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
    } else {
        guestNav.style.display = 'inline-block';
        userNav.style.display = 'none';
    }
}

// TODO Add custom validation
export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        let formData = new FormData(event.target);
        let data = [... formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    };
}