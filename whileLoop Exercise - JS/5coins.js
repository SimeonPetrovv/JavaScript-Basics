function coins (input) {
    let change = Number(input[0])
    let changeInCoins = Math.floor(change * 100);

    let sum = 0;
    let twoLeva = 200;
    let oneLev = 100;
    let fiftyCoins = 50;
    let twentyCoins = 20;
    let tenCoins = 10;
    let fiveCoins = 5;
    let twoCoins = 2;
    let oneCoin = 1;

    while (changeInCoins > 0) {
        if (changeInCoins >= twoLeva) {
            changeInCoins -= twoLeva;
        } else if (changeInCoins >= oneLev) {
            changeInCoins -= oneLev;
        } else if (changeInCoins >= fiftyCoins) {
            changeInCoins -= fiftyCoins;
        } else if (changeInCoins >= twentyCoins) {
            changeInCoins -= twentyCoins;
        } else if (changeInCoins >= tenCoins) {
            changeInCoins -= tenCoins;
        } else if (changeInCoins >= fiveCoins) {
            changeInCoins -= fiveCoins;
        } else if (changeInCoins >= twoCoins) {
            changeInCoins -= twoCoins;
        } else if (changeInCoins >= oneCoin) {
            changeInCoins -= oneCoin;
        }

        sum++
    }
    console.log(sum);
}

coins 
(["1.23"]);
// (["2"]);
// (["0.56"])
// (["2.73"])