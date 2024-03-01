function solve() {

    let infoSpanRef = document.querySelector("#info span");
    let departBtnRef = document.getElementById("depart");
    let arriveBtnRef = document.getElementById("arrive");
    let stop = {
        currentStop: "",
        next: "depot"

    }
    
    const url = `http://localhost:3030/jsonstore/bus/schedule/`;


    async function depart() {
        const response = await fetch(url + "depot");
        const data = await response.json();
        infoSpanRef.textContent = `Next stop ${data.name}`;
        departBtnRef.disabled = true;
        arriveBtnRef.disabled = false;
    }

    function arrive() {
        infoSpanRef.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();