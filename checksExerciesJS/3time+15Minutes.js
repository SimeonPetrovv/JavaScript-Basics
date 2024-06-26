function timePlusFifteenMinutes (input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]); 

    let totalMin = hour * 60 + minute + 15;

    let newHour = Math.floor(totalMin / 60);
    let newMin = totalMin % 60;

    if (newHour === 24) {
        newHour = 0;
    }

    if (newMin >= 10) {
        console.log(`${newHour}:${newMin}`);
    } else {
        console.log(`${newHour}:0${newMin}`);
    }
}

timePlusFifteenMinutes ([1, 20]);