function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let place = ``;
    let relax = ``;

    if (budget <= 100 && season === "summer") {
        place = "Bulgaria"; 
        price = budget * 0.3;
    } else if (budget <= 100 && season === "winter") {
        place = "Bulgaria"; 
        price = budget * 0.7;
    }

    if (season === "summer" && budget > 100 && budget <= 1000) {
        place = "Balkans"; 
        price = budget * 0.4;
    } else if (season === "winter" && budget > 100 && budget <= 1000) {
        place = "Balkans"; 
        price = budget * 0.8;
    }    
    
    if (budget > 1000) {
        season === "summer";
        season === "winter" 
        place = "Europe";
        price = budget * 0.9;
    }

    if (season === "summer" && place !== "Europe") {
        relax = "Camp";     
    } else if (season === "winter") {
        relax =  "Hotel";
    } else if (place === "Europe") {
        relax = "Hotel"
    }

    if (budget >= price) {
    console.log(`Somewhere in ${place}`); 
    console.log (`${relax} - ${price.toFixed(2)}`);
    } 
}

journey (["1500", "winter"]) 