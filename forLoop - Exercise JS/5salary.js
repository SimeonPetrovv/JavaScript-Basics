function monthSalary (input) {
    let browsers = Number(input[0]);
    let salary = Number(input[1]);

    penalty = 0;

    for (let idx = 2; idx < input.length; idx++) {
        let website = input[idx];

            if (website === "Facebook") {
                penalty += 150;
            } else if (website === "Instagram") {
                penalty += 100;
            } else if (website === "Reddit") {
                penalty += 50;
            }
    }

    let remainingSalary = salary - penalty

    if (remainingSalary <= 0) {
    console.log(`You have lost your salary.`);
    } else  {
        console.log(remainingSalary);
    }

}    

monthSalary 

(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])

// (["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])

// (["10",

// "750",

// "Facebook",

// "Dev.bg",

// "Instagram",

// "Facebook",

// "Reddit",

// "Facebook",

// "Facebook"])