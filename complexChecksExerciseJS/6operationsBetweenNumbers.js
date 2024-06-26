function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number (input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = ``;

    if (operator === "+") {
        result = num1 + num2;
        if (result % 2 === 0) {
            evenOrOdd = `even`;
        } else if (result % 10 === 5) {
            evenOrOdd = `odd`;
        }
        console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "-") {
        result = num1 - num2;
        if (result % 2 === 0) {
            evenOrOdd = `even`;
        } else {
            evenOrOdd = `odd`;
        }
        console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "*") {
        result = num1 * num2;
        if (result % 2 === 0) {
            evenOrOdd = `even`;
        } else {
            evenOrOdd = `odd`;
        }
        console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);

    } if (operator === "/") {
        result = num1 / num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`); 
    }

    } if (operator === "%") {
        result = num1 % num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
        console.log(`${num1} % ${num2} = ${result}`);
        } 
    }
}

operationsBetweenNumbers (["7",

"3",

"*"])