function attachEvents() {
    document.getElementById("submit").addEventListener("click", getWeather);
    let forecastSectionRef =document.getElementById("forecast");
    let locationInputRef = document.getElementById("location");
    let currentRef = document.getElementById("current");
    let upcomingRef = document.getElementById("upcoming");

    let baseLocationURL = "http://localhost:3030/jsonstore/forecaster/locations";
    let todayURL = "http://localhost:3030/jsonstore/forecaster/today/";


    async function getWeather(e){
        let userInput = locationInputRef.value;
        forecastSectionRef.style.display = "block";
        let locationResponse = await fetch(baseLocationURL);
        let locationData = await locationResponse.json() ;
        let currentLocationData = locationData.find(x=> x.name == userInput)
        fillTodayData(currentLocationData.code)
    }

    async function fillTodayData (code) {
        let response = await fetch(todayURL + code);
        let data = await response.json();
        debugger
    }
}

attachEvents();