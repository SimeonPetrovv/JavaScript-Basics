function multiplicationTable (input) {
    let constNumber = Number(input[0]);

    for (let dividedNum = 1; dividedNum <= 20; dividedNum++) {
        console.log(`${dividedNum} * ${constNumber} = ${dividedNum * constNumber}`);
    }
}

multiplicationTable (["5"])