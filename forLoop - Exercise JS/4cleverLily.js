function cleverLily (input) {
    let lilyYears = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let  moneySaved = 0;
    let moneyPerEvenBirth = 10;

    for (let birth = 1; birth <= lilyYears; birth++) {
        if (birth % 2 === 0) {
            moneySaved += moneyPerEvenBirth - 1;
            moneyPerEvenBirth += 10;
        } else {
            moneySaved += toyPrice;
        }
    } 

    if (moneySaved >= washerPrice) {
        let moneyLeft = moneySaved - washerPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - moneySaved
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily (["21", 

"1570.98",

"3"])