function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let nextNum = Number(input[i]);
        if (nextNum < 200 ) {
            p1++
        } else if (nextNum < 400) {
            p2++
        } else if (nextNum < 600) {
            p3++
        } else if (nextNum < 800) {
            p4++
        } else {
            p5++
        }
    } 

    let p1Percent = (p1 / n) * 100;
    let p2Percent = (p2 / n) * 100;
    let p3Percent = (p3 / n) * 100;
    let p4Percent = (p4 / n) * 100;
    let p5Percent = (p5 / n) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

histogram (["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])