function vacation (input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let moneyOnHand = Number(input[index]);
    index++;

    let dayCount = 0;
    let spendDayCount = 0;
    let trueOrFalse = false;

    while (neededMoney > moneyOnHand) {
        dayCount++;
        let saveOrSpend = input[index];
        index++;
        
        let money = Number(input[index]);
        index++;

        if (saveOrSpend === "spend") {
            spendDayCount++;
            if (spendDayCount === 5) {
                trueOrFalse = true;
                console.log(`You can't save the money.`);
                console.log(`${dayCount}`);
                break;
                }

                moneyOnHand -= money;
                if (moneyOnHand < 0) {
                    moneyOnHand = 0;
                }
        } 

        if (saveOrSpend === "save") {
            spendDayCount = 0;
            moneyOnHand += money;
        }
    }
    if (!trueOrFalse) {
        console.log(`You saved the money for ${dayCount} days.`);
    }
}

vacation   

// (["110",
// "60",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10"])


// (["2000", "1000", "spend", "1200", "save", "2000", "spend", "1000"]);

(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);

// (["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
