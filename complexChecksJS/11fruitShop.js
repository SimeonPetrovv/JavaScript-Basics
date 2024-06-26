function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
  
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday")  { 
        let price = 0;
        switch (product) {
            case "banana" :  price = quantity * 2.5; console.log(price.toFixed(2)); break;
            case "apple" : price = quantity * 1.2; console.log(price.toFixed(2)); break;
            case "orange": price = quantity * 0.85; console.log(price.toFixed(2)); break;
            case "grapefruit" : price = quantity * 1.45; console.log(price.toFixed(2)); break;
            case "kiwi" : price = quantity * 2.70; console.log(price.toFixed(2)); break;
            case "pineapple" : price = quantity * 5.5; console.log(price.toFixed(2)); break;
            case "grapes" : price = quantity * 3.85; console.log(price.toFixed(2)); break; 
            default : console.log("error");
        }    

    } else if (day === "Saturday" || day === "Sunday" ) {
        let weekendPrice = 0;
        switch (product) {
            case "banana" :  weekendPrice = quantity * 2.7;  console.log(weekendPrice.toFixed(2)); break;
            case "apple" : weekendPrice = quantity * 1.25;  console.log(weekendPrice.toFixed(2)); break;
            case "orange": weekendPrice = quantity * 0.9;  console.log(weekendPrice.toFixed(2)); break;
            case "grapefruit" : weekendPrice = quantity * 1.6;  console.log(weekendPrice.toFixed(2)); break;
            case "kiwi" : weekendPrice = quantity * 3;  console.log(weekendPrice.toFixed(2)); break;
            case "pineapple" : weekendPrice = quantity * 5.60;  console.log(weekendPrice.toFixed(2)); break;
            case "grapes" : weekendPrice = quantity * 4.2;  console.log(weekendPrice.toFixed(2)); break;
            default : console.log("error");
        }
    } else {
        console.log("error");
    }
}

fruitShop (["pineapple", "Monday", "1"])