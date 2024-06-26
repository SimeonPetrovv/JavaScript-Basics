function equalSumsEvenOddPosition (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = "";

    for (let num = num1; num <= num2; num++) {
        let curNumStr = String(num);
        let oddBuff = 0;
        let evenBuff = 0;

        for (let even = 0; even < curNumStr.length; even += 2) {
            let curDigit = Number(curNumStr[even]);
            evenBuff += curDigit;
        }

        for (let odd = 1; odd < curNumStr.length; odd += 2) {
            let curDigit = Number(curNumStr[odd]);
            oddBuff += curDigit;
        }

        if (evenBuff === oddBuff) {
            result += curNumStr + " ";
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition (["100000",

"100050"]);