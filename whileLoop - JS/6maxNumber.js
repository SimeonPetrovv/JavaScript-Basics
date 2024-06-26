function maxNumber (input) {
    let index = 0;
    let command = input[index];
    index++

    let buff = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (num > buff) {
            buff = num;
        } 

        command = input[index];
        index++
    }  
    console.log(buff);
}

maxNumber 

// (["45", "-20", "7", "99", "Stop"])

// (["-10", "20", "-30", "Stop"]);

// (["100", "99", "80", "70", "Stop"])