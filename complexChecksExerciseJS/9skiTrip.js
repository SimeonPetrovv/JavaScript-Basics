function skiTrip(input) {
    let daysInHotel = Number(input[0]);
    let room = input[1];
    let feedback = input[2];

    let price = 0;
    let bookingInHotel = daysInHotel - 1;

    switch (room) {
        case "room for one person" :
            price = bookingInHotel * 18; break;

        case "apartment" :
            price = bookingInHotel * 25; break;

        case "president apartment" :
            price = bookingInHotel * 35; break;
    }

    if (daysInHotel < 10 && room === "apartment") {
        price *= 0.7;
    } else if (daysInHotel <= 15 && room === "apartment") {
        price *= 0.65;
    } else if (daysInHotel > 15 && room === "apartment") {
        price *= 0.5;
    }

    if (daysInHotel < 10 && room === "president apartment") {
        price *= 0.9;
    } else if (daysInHotel <= 15 && room === "president apartment") {
        price *= 0.85;
    } else if (daysInHotel > 15 && room === "president apartment") {
        price *= 0.8;
    }

    if (feedback === "positive") {
        price *= 1.25;
    } else {
        price *= 0.9;
    }

    console.log(price.toFixed(2));
}

skiTrip (["2", "apartment", "positive"])
