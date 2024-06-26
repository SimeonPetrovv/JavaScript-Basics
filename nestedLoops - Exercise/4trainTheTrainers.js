function trainTheTrainers (input) {
    let judge = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let counter = 0;
    let sumOfAllGrades = 0;
    let judgeCounter = 0;

    while (command !== "Finish") {
        let grades = Number(input[index]);
        let gradeSum = 0;
        judgeCounter += judge;
            while (counter < judge) {
                grades = Number(input[index]);
                gradeSum += grades;
                sumOfAllGrades += grades;
                counter++;
                index++;

                if (counter === judge) {
                    counter = 0;
                    console.log(`${command} - ${(gradeSum / judge).toFixed(2)}.`);
                    break;
                }
            }

        command = input[index];
        index++; 
    }
    console.log(`Student's final assessment is ${(sumOfAllGrades / judgeCounter).toFixed(2)}.`);
}

trainTheTrainers (["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);