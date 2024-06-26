function lunchBreak (input) {
    let seriesName = (input[0]);
    let episodeLength = Number(input[1]);
    let restTime = Number(input[2]);

    let lunchBreak = restTime * (1 / 8);
    let pauseBreak = restTime * (1 / 4);
    let totalTimeForRest = restTime - lunchBreak - pauseBreak;
    
    if (totalTimeForRest >= episodeLength ) {
        let timeleft = totalTimeForRest - episodeLength;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeleft)} minutes free time.`);
    } else {
        let timeNeed = episodeLength - totalTimeForRest;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeed)} more minutes.`);
    }
}

lunchBreak (["Game of Thrones",

"60",

"96"])