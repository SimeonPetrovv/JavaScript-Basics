function depositCalc (input) {
    let depositSum = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let annualRate = Number(input[2]);
    let aR = (annualRate / 100);

    let finalResult = depositSum + termOfDeposit * (depositSum * aR) / 12;

    console.log (finalResult);
}

depositCalc ([200, 3, 5.7]);