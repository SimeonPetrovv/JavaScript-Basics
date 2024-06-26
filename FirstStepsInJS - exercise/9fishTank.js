function fishTank (input) {
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percentOccupiedSpace = Number(input[3]) / 100;

    let capacityLitres = (lengthCm * widthCm * heightCm) / 1000;
    let finalResult = capacityLitres * (1 - percentOccupiedSpace);

    console.log(finalResult);
}

fishTank (["85 ", "75 ", "47 ", "17 "])