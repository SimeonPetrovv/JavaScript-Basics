function tennisRanklist (input) {
    let tournamentNumber = Number(input[0]);
    let points = Number(input[1]);

    let totalPoints  = 0;
    let winMatches = 0;

    for (let idx = 2; idx < input.length; idx++) {
        let match = input[idx];

        if (match === "W") {
            totalPoints += 2000;
            winMatches++
        } else if (match === "F") {
            totalPoints += 1200;
        } else if (match === "SF") {
            totalPoints += 720;
        }
    }
    
    console.log(`Final points: ${points + totalPoints}`);
    console.log(`Average points: ${Math.floor(totalPoints / tournamentNumber)}`);
    console.log(`${((winMatches / tournamentNumber) * 100).toFixed(2)}%`);
}

tennisRanklist 

(["4",

"750",

"SF",

"W",

"SF",

"W"])

// (["5", "1400",

// "F",

// "SF",

// "W",

// "W",

// "SF"])