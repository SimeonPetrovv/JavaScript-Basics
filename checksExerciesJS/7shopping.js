function shopping (input) {
    let peterBudged = Number(input[0]);
    let videocardPcs = Number(input[1]);
    let  proccesorsPcs = Number(input[2]);
    let ramMemoryPcs = Number(input[3]);

    let videocards = videocardPcs * 250;
    let proccesors = (videocards * proccesorsPcs) * 0.35;
    let ramMemory = (videocards * ramMemoryPcs) * 0.10;

    totalPrice = videocards + proccesors + ramMemory

    if (videocardPcs > proccesorsPcs) {
        totalPrice *= 0.85;
    }
    
    let moneyLeft = peterBudged - totalPrice;
    let moneyNeed = Math.abs(totalPrice - peterBudged);

    if (peterBudged >= totalPrice) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`);
    }
}

shopping (["900",

"2",

"1",

"3"])