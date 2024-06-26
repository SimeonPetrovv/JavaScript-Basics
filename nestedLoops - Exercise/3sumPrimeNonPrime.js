function sumPrimeNonPrime (input) {
    let index = 0;
    let command = input[index];

    let nonPrimeNum = 0;
    let primeNum = 0;

    while (command !== "stop") {
        let num = Number(command);
        let isPrime = true;

        if (num < 0) {
            console.log(`Number is negative.`);

            index++
            command = input[index];

            continue;
        }

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeNum += num;
        } else {
            nonPrimeNum += num;
        }

        index++;
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}

sumPrimeNonPrime (["3", "9", "0", "7", "19", "4", "stop"]);