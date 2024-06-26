function yardLandscaping (input) {
    let squareMeter = Number(input[0]);
    let money = 7.61 * squareMeter;
    let percent = money * 0.18;
    let finalPrice = money - percent;

    console.log (`The final price is: ${finalPrice} lv.`);
    console.log (`The discount is: ${percent} lv.`);
}

yardLandscaping ([550]);