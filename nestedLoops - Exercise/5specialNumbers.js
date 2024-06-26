function specialNumbers (input) {
    let n = Number(input[0]);

    let result = "";

    for (let i = 1111; i <= 9999; i++) {
       let numbers = String(i);
       let specialNum = "";
        
        for (let idx = 0; idx < numbers.length; idx++) {
            let magicNum = Number(numbers[idx]);
            if (n % magicNum === 0){
                specialNum += magicNum;
            }
             
            if (specialNum.length === 4) {
                result += specialNum + " ";
            } 
        }
    }
    console.log(result);
}

specialNumbers (["3"])