function vacationBooksList(input) {
    let numOfPage = (input[0]);
    let page  = (input[1]);
    let numOfDays = (input[2]);
     
    let hoursOfReading = (numOfPage / page);
    let finalResult = (hoursOfReading / numOfDays);

    console.log(finalResult);
}

vacationBooksList ([212, 20, 2]);