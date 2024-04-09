import { logout } from '@src/data/users';
import { getUserData } from '@src/util.js';

export function session() {
    document.getElementById('logoutbtn').addEventListener('click', onLogout);
    return function(ctx, next) {
        ctx.user = getUserData();
        next();
    };
}

function onLogout() {
    logout();
    goTo('/');
}