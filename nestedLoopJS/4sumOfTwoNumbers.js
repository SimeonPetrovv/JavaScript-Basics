function sumOfTwoNumbers (input) {
    let begin = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let count = 0;
    let isTrueOrFalse = false;

    for (let num1 = begin; num1 <= end; num1++) {
        for(let num2 = begin; num2 <= end; num2++) {
            count++
            if (num1 + num2 === magicNum) {
                isTrueOrFalse = true;
                console.log(`Combination N:${count} (${num1} + ${num2} = ${num1+num2})`);
                break;
            }
        } if (isTrueOrFalse) {
            break;
        }
    }
    if (!isTrueOrFalse) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers (["1", "10", "5"]);