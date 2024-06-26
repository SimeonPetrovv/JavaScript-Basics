function newHouse(input) {
    let kindOfFlowers = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (kindOfFlowers) {
        case "Roses" :
            price = numFlowers * 5; break;

        case "Tulips" :
            price = numFlowers * 2.80; break;

        case "Dahlias" :
            price = numFlowers * 3.80; break;

        case "Narcissus" :
            price = numFlowers * 3; break;

        case "Gladiolus" :
            price = numFlowers * 2.50; break; 
        }

    if (numFlowers > 80 && kindOfFlowers === "Roses") {
       price *= 0.9;
    } else  if (numFlowers > 80 && kindOfFlowers === "Tulips") {
        price *= 0.85;
    } else if (numFlowers > 90 && kindOfFlowers === "Dahlias") {
        price *= 0.85;
    } else if (numFlowers < 120 && kindOfFlowers === "Narcissus") {
        price *= 1.15;
    } else if (numFlowers < 80 && kindOfFlowers === "Gladiolus") {
        price *= 1.2;
    }

    if (budget >= price) {
        let moneyLeft = budget - price
    console.log(`Hey, you have a great garden with ${numFlowers} ${kindOfFlowers} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

newHouse (["Roses",

"55",

"250"])