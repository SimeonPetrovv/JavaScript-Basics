function moving (input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);

    let space = width * length * heigth;

    index = 3;
    let command = (input[index]);

    while (command !== "Done") {
        let freeSpace = Number(command);
        space -= freeSpace

        if (space < 0) {
            console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
            break;
        }

        index++
        command = input[index];
    }

    if (space >= 0) {
        console.log(`${space} Cubic meters left.`);
    }
}

moving
(["10", "10", "2", "20", "20", "20", "20", "122"]);
// (["10", "1", "2", "4",  "6", "Done"]);

