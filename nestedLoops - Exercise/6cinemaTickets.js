function cinemaTickets (input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;
    let peopleCount = 0;

    while (command !== "Finish") {
        let slots = Number(input[index]);
        let ticket = input[index];
        let people = 0;
        index++
        
        while (ticket !== "End") {
            ticket = input[index];
            if (ticket === "student") {
                studentTickets++;
            } else if (ticket === "standard") {
                standartTickets++;
            } else if (ticket === "kid") {
                kidTickets++;
            }

            people++;
            peopleCount++;

            if (slots === people) {
                break;
            }

            index++;
            ticket = input[index];
        }

        console.log(`${command} - ${((people / slots) * 100).toFixed(2)}% full.`);

        index++;
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${standartTickets + studentTickets + kidTickets}`);
    console.log(`${((studentTickets / peopleCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / peopleCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / peopleCount) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets (["Taxi", "10", "standard", "kid", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "Finish"]);