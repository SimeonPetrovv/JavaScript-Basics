function godzillaVsKong (input) {
    let filmBudged = Number(input[0]);
    let actor = Number(input[1]);
    let actorClothesPerPerson = Number(input[2]);

    let totalActorsClothes = actor * actorClothesPerPerson;
    let decorPercent = filmBudged * 0.10;

    if (actor > 150) {
        totalActorsClothes *= 0.90;
    }

    let totalBudged = totalActorsClothes + decorPercent

    if(totalBudged > filmBudged) {
        let moneyNeed = Math.abs(totalBudged - filmBudged)
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = filmBudged - totalBudged
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

godzillaVsKong (["20000",

"120",

"55.5"])