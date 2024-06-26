function worldSwimmingRecord (input) {
    recordInSeconds = Number(input[0]);
    distanceInMeters = Number(input[1]);
    timeInSeconds = Number(input[2]);

    let metersToSwim = distanceInMeters * timeInSeconds
    let meters = Math.floor(distanceInMeters / 15)
    let slowMetersTime = (meters * 12.5)
    let totalTime = metersToSwim + slowMetersTime

    if (recordInSeconds > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        secondsNeed = Math.abs(recordInSeconds - totalTime)
        console.log(`No, he failed! He was ${secondsNeed.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord (["10464",

"1500",

"20"])
