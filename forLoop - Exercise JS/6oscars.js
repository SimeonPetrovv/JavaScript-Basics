function oscars (input) {
    let actorName = input[0];
    let totalPoints = Number(input[1]);
    let judgeNumber = Number(input[2]);


    for (let idx = 3; idx < input.length; idx += 2) {
        let judgeName = input[idx].length;
        let judgePoints = Number(input[idx + 1])

        let points = (judgeName * judgePoints) / 2;
        totalPoints += points;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }

    if (totalPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
}

oscars (["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])