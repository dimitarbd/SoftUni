function solve() {

    const url = `http://localhost:3030/jsonstore/bus/schedule/`

    async function depart() {
        const response = await fetch(url + "depot");
        const data = await response.json();
        debugger
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();