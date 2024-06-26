function multiplicationTable() {
    for (let num = 1; num <= 10; num++) {
        for (let num1 = 1; num1 <= 10; num1++)
            console.log(`${num} * ${num1} = ${num * num1}`);
    }
}

multiplicationTable ();