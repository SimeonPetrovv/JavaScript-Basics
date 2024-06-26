function walking (input) {
    let index = 0;
    let goingHome = input[index];

    let count = 0;
    let goalToReach = 10000;

    while (goingHome !== "Going home") {
        let steps = Number(goingHome);
        count += steps

        if (count >= goalToReach) {
            count -= goalToReach;
            console.log(`Goal reached! Good job!`);
            console.log(`${count} steps over the goal!`);
            break;
        }
        index++;
        goingHome = input[index];

        }

        if (goingHome === "Going home") {
            let stepsToHome = Number(input[index + 1]);
            count += stepsToHome;

            if (count >= goalToReach) {
                count -= goalToReach;
            console.log(`Goal reached! Good job!`);
            console.log(`${count} steps over the goal!`);
            } else {
                goalToReach -= count;
                console.log(`${goalToReach} more steps to reach goal.`);
            }
        } 
    }


walking

// (["1000", "1500", "2000", "6500"]);
// (["1500", "300", "2500", "3000", "Going home", "200"]);
(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// (["125", "250", "4000", "30", "2678", "4682"]);