const crops = [];
const seed_value = [0.01, 0.15, 0.5, 1, 1.5, 7, 5, 7];
const harvested_value = [0.02, 0.24, 0.8, 1.5, 2.3, 9, 7, 10];
const harvested_name = ["Sunflower", "Rhubarb", "Carrot", "Cabbage", "Soybean", "Corn", "Wheat", "Kale"];

const total = [];

const calculate = document.getElementById('calc_btn');
calculate.addEventListener('click', () => {
    let total_capital = 0;
    // Retrieve crop values from input fields
    crops[0] = document.getElementById('sunflower_int').value;
    crops[1] = document.getElementById('rhubarb_int').value;
    crops[2] = document.getElementById('carrot_int').value;
    crops[3] = document.getElementById('cabbage_int').value;
    crops[4] = document.getElementById('soybean_int').value;
    crops[5] = document.getElementById('corn_int').value;
    crops[6] = document.getElementById('wheat_int').value;
    crops[7] = document.getElementById('kale_int').value;

    // Calculate total for each crop
    for (let i = 0; i < crops.length; i++) {
        total[i] = parseFloat(crops[i]) * harvested_value[i]; // Use parseFloat for decimal inputs
        total_capital += parseFloat(crops[i]) * seed_value[i];
    }

    // Build output string
    let output = "";
    for (let i = 0; i < crops.length; i++) {
        if (crops[i] != "0") {
            output += `${harvested_name[i]}: ${total[i].toFixed(2)}<br>`; // Format to 2 decimal places
        }
    }
    output += `<h4>Total: ${total.reduce((a, b) => a + b, 0).toFixed(2)}</h4>`;
    output += `<h4>Resources(Capital): ${total_capital.toFixed(2)}</h4>`;
    output += `<h4>Net Profit(Income): ${(total.reduce((a, b) => a + b, 0) - total_capital).toFixed(2)}</h4>`;
    // Display results
    const result = document.getElementById('result');

    result.innerHTML = output; // Use innerHTML to render HTML content
});
