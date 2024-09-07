const form = document.querySelector("form");
form.addEventListener("submit", function (e) { 
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please provide a valid height.';
    }

    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please provide a valid weight.';
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;


    }
    
});
