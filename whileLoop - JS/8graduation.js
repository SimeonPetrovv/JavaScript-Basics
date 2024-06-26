function graduation (input) {
    let index = 0;
    let studentName = input[index];
    index++

    let i = 1;
    let sumGrades = 0;
    let badGrade = 0;
    let isExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++

        if (grade < 4.00) {
            badGrade++;
                if (badGrade === 2) {
                    isExcluded = true;
                    console.log(`${studentName} has been excluded at ${i} grade`);
                    break;
                }
            continue;
        }

        sumGrades += grade;
        i++;
    }
    if (!isExcluded) {
        console.log(`${studentName} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`);
    }
}

graduation 

(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])

// (["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])