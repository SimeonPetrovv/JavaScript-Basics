function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May" :
        case "October" :
            apartmentPrice = 65;
            studioPrice = 50;
        break;

        case "June" :
        case "September" :
            apartmentPrice = 68.7;
            studioPrice = 75.2;
        break;

        case "July" :
        case "August" :
            apartmentPrice = 77;
            studioPrice = 76;
        break;
    }

    if (nights > 7 && nights <= 14 && (month === "May" || month === "October" )) {
        studioPrice *= 0.95;
    } if (nights > 14 && (month === "May" || month === "October")) {
        studioPrice *= 0.7;
    } if (nights > 14 && (month === "June" || month === "September")) {
        studioPrice *= 0.8;
    } 

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
}

hotelRoom  (["May",

"15"])