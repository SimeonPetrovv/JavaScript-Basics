function suppliesForSchool(input) {
    let packetPen = Number(input[0]);
    let packetMarker = Number(input[1]);
    let preparation = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let sumOfAll = (packetPen * 5.8 + packetMarker * 7.2 + preparation * 1.2);
    let discountAmount = sumOfAll * discount;

    let finalPrice = sumOfAll - discountAmount;

    console.log(finalPrice);
}

suppliesForSchool (["2 ","3 ","4 ","25 "]);