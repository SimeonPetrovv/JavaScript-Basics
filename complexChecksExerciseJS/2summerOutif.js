function summerOutfit (input) {
    let celsius = Number(input[0]);
    let clothes = input[1];

    let shoes = ``;
    let outfit = ``;

    if (celsius <= 18) {
        switch (clothes) {
            case "Morning" :
                outfit = "Sweatshirt";
                shoes = "Sneakers"; break;
           case "Afternoon" : 
                outfit = "Shirt"; 
                shoes = "Moccasins"; break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } else if (celsius <= 24) {
        switch (clothes) {
            case "Morning" :
                outfit = "Shirt";
                shoes = "Moccasins"; break;
           case "Afternoon" : 
                outfit = "T-Shirt"; 
                shoes = "Sandals"; break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } else if (celsius >= 25) {
        switch (clothes) {
            case "Morning" :
                outfit = "T-Shirt";
                shoes = "Sandals"; break;
           case "Afternoon" : 
                outfit = "Swim Suit"; 
                shoes = "Barefoot"; break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins"; break;
        }
    } 
    
    console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit (["28", "Evening"])