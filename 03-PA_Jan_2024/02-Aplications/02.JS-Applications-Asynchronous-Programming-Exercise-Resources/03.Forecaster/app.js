function attachEvents() {
    document.getElementById("submit").addEventListener("click", getWeather);
    let forecastSectionRef = document.getElementById("forecast");
    let locationInputRef = document.getElementById("location");
    let currentRef = document.getElementById("current");
    let upcomingRef = document.getElementById("upcoming");

    let baseLocationURL = "http://localhost:3030/jsonstore/forecaster/locations";
    let todayURL = "http://localhost:3030/jsonstore/forecaster/today/";
    let upcomingURL = "http://localhost:3030/jsonstore/forecaster/upcoming/"


    async function getWeather(e) {
        let userInput = locationInputRef.value;
        forecastSectionRef.style.display = "block";
        let locationResponse = await fetch(baseLocationURL);
        let locationData = await locationResponse.json();
        let currentLocationData = locationData.find(x => x.name == userInput)
        await fillTodayData(currentLocationData.code);
        await fillUpcomingData(currentLocationData.code);

    }

    async function fillTodayData(code) {
        let response = await fetch(todayURL + code);
        let data = await response.json();
        let todayInfo = createForcastTodaySection(data);
        let upcomingInfo = createForcastTodaySection(data);
        currentRef.appendChild(todayInfo);
    }

    async function fillUpcomingData(code) {
        let response = await fetch(upcomingURL + code);
        let data = await response.json();
        let upcomingInfo = createForecastUpcomingSection(data);
        upcomingRef.appendChild(upcomingInfo);
    }

    function createForecastUpcomingSection(data) {
        let container = document.createElement("div");
        container.classList.add("forecast-info");
        let upcoming1 = generateSpan("upcoming", data.name, data.forecast[0]);
        let upcoming2 = generateSpan("upcoming", data.name, data.forecast[1]);
        let upcoming3 = generateSpan("upcoming", data.name, data.forecast[2]);

        container.appendChild(upcoming1);
        container.appendChild(upcoming2);
        container.appendChild(upcoming3);
        return container;
    }

    function generateSpan(classes, name, data) {
        let spanContainer = document.createElement("span");
        spanContainer.classList.add(classes);

        let spanName = document.createElement("span");
        spanName.classList.add("forecast-data");
        spanName.textContent = data.name;

        let degree = document.createElement("span");
        degree.classList.add("forecast-data");
        degree.innerHTML = `${data.low + findSymbol("Degrees")}\\${data.high + findSymbol("Degrees")}`;

        let condition = document.createElement("span");
        condition.classList.add("forecast-data");
        condition.textContent = data.condition;

        spanContainer.appendChild(spanName);
        spanContainer.appendChild(degree);
        spanContainer.appendChild(condition);

        return spanContainer;
    }

    function createForcastTodaySection(data) {
        let container = document.createElement("div");
        container.classList.add("forecasts");
        let conditionSpan = document.createElement("span");
        conditionSpan.classList.add("condition");
        conditionSpan.classList.add("symbol");
        conditionSpan.innerHTML = findSymbol(data.forecast.condition);

        container.appendChild(conditionSpan);
        let spanContainer = generateSpan("condition", data.name, data.forecast)

        container.appendChild(spanContainer);
        return container;
    }

    function findSymbol(condition) {
        switch (condition) {
            case "Sunny": return "&#x2600";
            case "Partly": return "&#x26C5";
            case "Overcast": return "&#x2601";
            case "Rain": return "&#x2614";
            case "Degrees": return "&#176"

        }
    }
}

attachEvents();