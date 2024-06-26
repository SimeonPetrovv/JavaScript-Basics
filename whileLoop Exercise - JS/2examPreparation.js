function examPreparation (input) {
    let index = 0;
    let permaBadGrade = Number(input[index]);
    index++;

    let sum = 0;
    let sumOfBadGrades = 0;
    let exerciseCounter = 0;
    let isExcluded = false;

    while (permaBadGrade > sumOfBadGrades) {
        let exercise = input[index];
        index++

        if (exercise === "Enough") {
            isExcluded = true;
            console.log(`Average score: ${(sum / exerciseCounter).toFixed(2)}`);
            console.log(`Number of problems: ${exerciseCounter}`);
            console.log(`Last problem: ${input[index - 3]}`);
            break;
        }

        let grades = Number(input[index]);
        sum += grades
        exerciseCounter++
        index++

        if (grades <= 4.00) {
            sumOfBadGrades++;
        }
    }

    if (!isExcluded) {
        console.log(`You need a break, ${sumOfBadGrades} poor grades.`);
    }
}

examPreparation 

(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);

// (["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);