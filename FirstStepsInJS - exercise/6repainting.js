function repainting(input) {
    let amountNylon = Number(input[0]);
    let amountPaint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWorkMaster = Number(input[3]);
    
    let amountN = (amountNylon + 2) * 1.50;
    let amountP = amountPaint * 14.50;
    let amountT = thinner * 5;
    let percentPaint = (amountP * 0.1) + amountP
    let amountOfAllMaterials = amountN + percentPaint + amountT + 0.4;
    let percentMaster = (amountOfAllMaterials * 0.3) * hoursWorkMaster;
    let finalResult = percentMaster + amountOfAllMaterials

    console.log(finalResult);
}

repainting ([10, 11, 4, 8]);
