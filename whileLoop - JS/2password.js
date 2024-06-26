function password (input) {
    let index = 0;
    let username = input[index];
    index++;

    let password = input[index];
    index++

    while (true) {
        let data = input[index] 
        index++;
            if (data === password) {
                console.log(`Welcome ${username}!`);
                break;
            }
    }
}

password (["Nakov",

"1234",

"Pass",

"1324",

"1234"])