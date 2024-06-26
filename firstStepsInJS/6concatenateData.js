function concatenateData (input) {
    let name = (input[0]);
    let surrname = (input[1]);
    let age = Number(input[2]);
    let town = (input[3]);

    console.log (`You are ${name} ${surrname}, a ${age}-years old person from ${town}.`);
}

concatenateData (["Simeon", "Petrov", 23, "Asenovgrad"]);