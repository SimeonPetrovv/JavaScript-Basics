function basketballEquipment (input) {
    let annualAmount = Number(input[0]);

    let sneakersPrice = annualAmount * 0.6;
    let outfitPrice = sneakersPrice * 0.8;
    let ballPrice = outfitPrice * (1 / 4);
    let accessoriesPrice = ballPrice * (1 / 5);
    let finalResult = annualAmount + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(finalResult);
}

basketballEquipment([550]);
