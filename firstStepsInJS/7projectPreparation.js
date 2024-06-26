function projectPreparation(input) {
    let archName = (input[0]);
    let projectNumber = Number(input[1]);
    let hoursWork = projectNumber * 3;

    console.log (`The architect ${archName} will need ${projectNumber * 3} hours to complete ${projectNumber} project/s.`)
}

projectPreparation (["George", 4]);
