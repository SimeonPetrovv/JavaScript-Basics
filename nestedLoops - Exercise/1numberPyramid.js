function pyramid (input) {
    let n = Number(input[0]);
    let current = 1;
    
    for (let num1 = 1; num1 <= n; num1++ ) {
        let buff = "";
        let isBigger = false;
        for (num2 = 1; num2 <= num1; num2++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            buff += current + " ";
            current++;
        }
            console.log(buff);
            if (isBigger) {
                break;
            }
    }
}

pyramid (["7"]);