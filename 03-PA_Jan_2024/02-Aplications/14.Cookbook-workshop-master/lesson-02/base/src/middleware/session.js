import { getUserData } from '@src/util.js';

export function session() {
    document.getElementById("logoutbtn").addEventListener("click", onLogout);
    return function(ctx, next) {
        ctx.user = getUserData();
        console.error('session');
        next();
    };
}

function onLogout() {
    // logout();
}