function areaOfFigures (input) {
    let figureName = (input[0]);

    if (figureName === "square") {
        let squareNum = Number(input[1]);
        let area = squareNum * squareNum

        console.log(area.toFixed(3));
    } else if (figureName === "rectangle") {
        let rA = Number(input[1]);
        let numRA = Number(input[2]);
        let area = rA * numRA;

        console.log(area.toFixed(3));
    } else if (figureName === "circle") {
        let numC = Number(input[1]);
        let area = Math.PI * Math.pow(numC, 2);

        console.log(area.toFixed(3));
    } else {
        let triangle = Number(input[1]);
        let numT = Number(input[2]);
        let area = triangle * numT / 2;

        console.log(area.toFixed(3));
    }
}

areaOfFigures (["triangle", "4.5", "20"])