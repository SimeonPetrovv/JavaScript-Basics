function animalType (input) {
    let animalName = input[0];

    switch (animalName) {
        case "dog" :
            console.log("mammal"); 
            break;

        case "snake" :
        case "crocodile" :
        case "tortoise" :
            console.log("reptile");
            break;

        default :
            console.log("unknown");
    }
}

animalType (["Pesho"]);