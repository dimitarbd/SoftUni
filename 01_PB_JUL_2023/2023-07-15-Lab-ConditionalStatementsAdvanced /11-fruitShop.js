function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana": console.log((price = quantity * 2.5).toFixed(2)); break;
            case "apple": console.log((price = quantity * 1.2).toFixed(2)); break;
            case "orange": console.log((price = quantity * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((price = quantity * 1.45).toFixed(2)); break;
            case "kiwi": console.log((price = quantity * 2.7).toFixed(2)); break;
            case "pineapple": console.log((price = quantity * 5.5).toFixed(2)); break;
            case "grapes": console.log((price = quantity * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana": console.log((price = quantity * 2.7).toFixed(2)); break;
            case "apple": console.log((price = quantity * 1.25).toFixed(2)); break;
            case "orange": console.log((price = quantity * 0.9).toFixed(2)); break;
            case "grapefruit": console.log((price = quantity * 1.6).toFixed(2)); break;
            case "kiwi": console.log((price = quantity * 3).toFixed(2)); break;
            case "pineapple": console.log((price = quantity * 5.6).toFixed(2)); break;
            case "grapes": console.log((price = quantity * 4.2).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}

fruitShop(["tomato",
"Monday",
"0.5"]);