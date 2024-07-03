// scripts.js
document.getElementById('convert-button').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp;
    let convertedUnit;

    if (isNaN(temperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    switch (unit) {
        case 'celsius':
            convertedTemp = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            convertedTemp = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            break;
        case 'kelvin':
            convertedTemp = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            convertedUnit = 'Celsius and Fahrenheit';
            break;
        default:
            break;
    }

    let resultText;
    if (unit === 'kelvin') {
        resultText = `${temperature} Kelvin is ${convertedTemp.celsius.toFixed(2)} Celsius or ${convertedTemp.fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        resultText = `${temperature} ${unit.charAt(0).toUpperCase() + unit.slice(1)} is ${convertedTemp.toFixed(2)} ${convertedUnit}.`;
    }

    document.getElementById('result').innerText = resultText;
});
