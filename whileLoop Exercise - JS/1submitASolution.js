function submitASolution (input) {
    index = 0;
    let book = input[index];
    index++;

    let bookSheSearch = input[index];
    let foundTheBook = false;

    while (bookSheSearch !== "No More Books") {
        bookSheSearch = input[index];
        index++;

        if (book === bookSheSearch) {
            foundTheBook = true;
            console.log(`You checked ${index - 2} books and found it.`);
            break;
            }
        } 
        
        if (!foundTheBook) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index - 2} books.`);
            }
    }

submitASolution 

(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
// (["Troy", "Stronger", "Life Style", "Troy"]);
// (["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);

