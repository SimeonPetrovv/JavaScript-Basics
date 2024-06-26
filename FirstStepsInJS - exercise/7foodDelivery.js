function foodDelivery (input) {
    let delivery = 2.50;
    let discount = (20 / 100);

    let chick = Number(input[0]);
    let fish = Number(input[1]);
    let veg = Number(input[2]);

    let chickenMenu = 10.35 * chick;
    let fishMenu = 12.40 * fish;
    let vegMenu = 8.15 * veg;

    let nonD = (chickenMenu + fishMenu + vegMenu);
    let desertD = ((chickenMenu + fishMenu + vegMenu) * discount);
    let finalPrice = (desertD + nonD + delivery);

    console.log (`Final price of the purchase: ${finalPrice}`);
}

foodDelivery ([2 , 4 , 3]);