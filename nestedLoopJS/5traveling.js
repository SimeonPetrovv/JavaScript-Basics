function traveling (input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let sum = 0;
        let destination = command;
        let moneyToSave = Number(input[index]);
        index++;
            while (sum < moneyToSave) {
                let money = Number(input[index]);
                index++;
                sum += money;
            }
            
            console.log(`Going to ${destination}!`);

        command = input[index];
        index++;
    }
}

traveling (["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);