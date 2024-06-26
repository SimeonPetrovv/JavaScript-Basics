function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let difference = examTime - arrivalTime;

    if (difference > 30) {
        console.log(`Early`);
    } else if (difference >= 0 && difference <= 30) {
        console.log(`On time`);
    } else {
        console.log(`Late`);
    }

    let hour = Math.floor(Math.abs(difference / 60))
    let minute = (difference % 60)

    if (difference < 0 && difference > -60) {
        console.log(`${Math.abs(difference)} minutes after the start`);
    } else if (difference <= -60 && minute <= -10) {
        console.log(`${hour}:${Math.abs(minute)} hours after the start`);
    } else if (difference <= -60 && (minute <= 0 && minute > -10)) {
        console.log(`${hour}:0${Math.abs(minute)} hours after the start`);
    }

    if (difference > 0 && difference < 60) {
        console.log(`${Math.abs(difference)} minutes before the start`);
    }  else if (difference >= 60 && minute >= 10) {
        console.log(`${hour}:${Math.abs(minute)} hours before the start`);
    }  else if (difference >= 60 && minute < 10) {
        console.log(`${(hour)}:0${Math.abs(minute)} hours before the start`);
    }
}

onTimeForTheExam 
// (["9","30","9","50"])
// (["9","00","8","30"])
// (["16","00","15", "00"])
(["9", "30", "9", "30"])
// (["14", "00", "13", "55"])
// (["11", "30","8", "12"])
// (["10", "00", "10", "00"])
// (["11", "30", "10", "55"])
// (["11", "30","12", "29"])