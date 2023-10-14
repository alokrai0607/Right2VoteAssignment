function generate() {
    let combinations = [];
    let tshirtPrice = 50;
    let jeansPrice = 80;
    let jacketPrice = 100;
    let budget = parseFloat(document.getElementById("budget").value);

    const maxTshirts = Math.floor(budget / tshirtPrice);
    const maxJeans = Math.floor(budget / jeansPrice);
    const maxJackets = Math.floor(budget / jacketPrice);

    for (let tshirts = 1; tshirts <= maxTshirts; tshirts++) {
        for (let jeans = 1; jeans <= maxJeans; jeans++) {
            const jackets = Math.floor((budget - (tshirts * tshirtPrice + jeans * jeansPrice)) / jacketPrice);
            if (jackets >= 1) {
                combinations.push(`T-shirts: ${tshirts}, Jeans: ${jeans}, Jackets: ${jackets}`);
            }
        }
    }

    let output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output
    combinations.forEach(combination => {
        console.log(combination);
        let p = document.createElement("p");
        p.innerText = combination;
        output.appendChild(p);
    });
    let p = document.createElement("p");
    p.innerText = "total combination: " + combinations.length;
    output.appendChild(p);
    console.log('Total valid combinations: ' + combinations.length);
}
