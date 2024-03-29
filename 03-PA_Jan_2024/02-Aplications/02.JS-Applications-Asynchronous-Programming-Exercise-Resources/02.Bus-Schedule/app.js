function solve() {

    let infoSpanRef = document.querySelector("#info span");
    let departBtnRef = document.getElementById("depart");
    let arriveBtnRef = document.getElementById("arrive");
    let stop = {
        currentStop: "",
        nextStop: "depot"

    }
    
    const url = `http://localhost:3030/jsonstore/bus/schedule/`;


    async function depart() {
        try {
            const response = await fetch(url + stop.nextStop);
            const data = await response.json();
    
            stop.currentStop = data.name;
            stop.nextStop= data.next;
    
            infoSpanRef.textContent = `Next stop ${data.name}`;
            departBtnRef.disabled = true;
            arriveBtnRef.disabled = false;
        } catch {
            infoSpanRef.textContent = "Error";
            departBtnRef.disabled = true;
            arriveBtnRef.disabled = true;
        }
    }

    function arrive() {
        infoSpanRef.textContent = `Arriving at ${stop.currentStop}`;
        departBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();