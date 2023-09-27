function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let destinationName = command;
        command = input[index];
        index++
        let destinationPrice = command;
        let savedMoney = 0;
        for (let i = index; i < input.length; i++) {
            let currentMoney = Number(input[index]);
            index++;
            savedMoney += currentMoney;
            if (savedMoney >= destinationPrice) {
                console.log(`Going to ${destinationName}!`);
                break;
            }
        }
        command = input[index];
        index++;
    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);