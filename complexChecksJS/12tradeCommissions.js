function tradeCommissions(input) {
    let town = input[0];
    let commissions = Number(input[1]);

    let percent = 0; 

    if (town === "Sofia") {
        if (commissions < 0) {
            console.log("error");
        }
        else if (commissions <= 500) {
            percent = commissions * 0.05;
            console.log(percent.toFixed(2));
        } else if (commissions <= 1000) {
            percent = commissions * 0.07;
            console.log(percent.toFixed(2));
        } else if ( commissions <= 10000) {
            percent = commissions * 0.08;
            console.log(percent.toFixed(2));
        } else if (commissions > 10000) {
            percent = commissions * 0.12;
            console.log(percent.toFixed(2));
        }
    }

        if (town === "Plovdiv") {
            if (commissions < 0) {
                console.log("error");
            }
            else if (commissions <= 500) {
                percent = commissions * 0.055;
                console.log(percent.toFixed(2));
        }   else if (commissions <= 1000) {
                percent = commissions * 0.08;
                console.log(percent.toFixed(2));
        }   else if ( commissions <= 10000) {
                percent = commissions * 0.12;
                console.log(percent.toFixed(2));
        }    else if (commissions > 10000) {
                percent = commissions * 0.145;
                console.log(percent.toFixed(2));
        }
    }

    if (town === "Varna") {
        if (commissions < 0) {
            console.log("error");
        }
        else if (commissions <= 500) {
                percent = commissions * 0.045;
                console.log(percent.toFixed(2));
        }   else if (commissions <= 1000) {
                percent = commissions * 0.075;
                console.log(percent.toFixed(2));
        }   else if ( commissions <= 10000) {
                percent = commissions * 0.1;
                console.log(percent.toFixed(2));
        }    else if (commissions > 10000) {
                percent = commissions * 0.13;
                console.log(percent.toFixed(2));
        } 
    }

    if (town !== "Plovdiv" && town !== "Sofia" && town !== "Varna") {
        console.log("error");
    } 
}

tradeCommissions (["Kaspichan", "-50"])
