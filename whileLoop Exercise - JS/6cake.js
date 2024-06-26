function cake (input) {
    index = 0;
    let command = input[index];
    let length = Number(input[index]);
    index++
    let width = Number(input[index]);
    index++

    let cakePieces = length * width;
    let takenPieces = Number(input[index]);

    while (command !== "STOP") {
            cakePieces -= takenPieces;

        index++

        if (cakePieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }

        command = input[index];
        takenPieces = Number(input[index]);
    }

    if (cakePieces >= 0) {
            console.log(`${cakePieces} pieces are left.`);
        }
}

cake 
(["10", "10", "20", "20", "20", "20", "21"]);
// (["10", "2", "2", "4", "6", "STOP"]);

