function accountBalance (input) {
    let index = 0;
    let money = Number(input[0]);
    let stopper = input[index];

    let sum = 0;

    while (stopper !== "NoMoreMoney") {
        money = Number(input[index]);
        index++;

        stopper = input[index];

        if (money < 0) {
            console.log(`Invalid operation!`);
            console.log(`Total: ${sum.toFixed(2)}`);
            break;
        }

        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money
    
        if (stopper === "NoMoreMoney") {
            console.log(`Total: ${sum.toFixed(2)}`);
            break;
        }
    }
}

accountBalance 

// (["NoMoreMoney"]);

// (["120", "45.55", "-150"]);

(["5.51",

"69.42",

"100",

"NoMoreMoney"]);