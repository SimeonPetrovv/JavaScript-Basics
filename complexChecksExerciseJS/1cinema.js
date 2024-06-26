function cinema (input) {
    let projects = input[0];
    let rows = Number(input[1]);
    let colum = Number(input[2]);

    let price = 0;

    if(projects === "Premiere") {
        price = 12 * rows * colum;
    } else if (projects === "Normal") {
        price = 7.50 * rows * colum;
    } 

    switch (projects) {
        case "Discount" : price = 5 * rows * colum; break;
    }

    console.log(`${price.toFixed(2)} leva`);
}

cinema (["Discount", "12", "30"])