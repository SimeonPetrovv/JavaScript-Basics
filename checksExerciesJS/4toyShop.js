function toyShop (input) {
    let vacationPrice = Number(input[0]);
    let puzzlePrice = Number(input[1]);
    let barbiePrice = Number(input[2]);
    let bearPrice = Number(input[3]);
    let minionPrice = Number(input[4]);
    let truckPrice = Number(input[5]);

    let totalPrice = (puzzlePrice * 2.60) + (barbiePrice * 3) + (bearPrice * 4.10) + (minionPrice * 8.20) + (truckPrice * 2);
    let sumPcToys = puzzlePrice + barbiePrice + bearPrice + minionPrice + truckPrice;

    if (sumPcToys >= 50) {
        totalPrice *= 0.75
    } 

    totalPrice *= 0.9;

    
    if (totalPrice >= vacationPrice) {
        let moneyLeft = (totalPrice - vacationPrice)
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = (vacationPrice - totalPrice)
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}

toyShop (["40.8",

"20",

"25",

"30",

"50",

"10"])