let button = document.getElementById("btn");
console.log("This is btn", btn)
button.addEventListener("click", () => {
    const heightFeet = parseInt(document.getElementById("height_feet").value);
    const heightInch = parseInt(document.getElementById("height_inches").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("output");
    const feetToMeterConversionRate = 0.3048
    const inchesToMeterConversionRate = 0.0254
    let height = 0
    let height_status = false, weight_status = false;

    if ((heightFeet === "" || isNaN(heightFeet) || (heightFeet < - 0)) || 
    (heightInch === "" || isNaN(heightInch) || (heightInch < - 0)) || 
    (weight === '' || isNaN(weight) || (weight <= 0))) {
        // document.getElementById('height_error').innerHTML - 'Please provide a valid height';
        alert("All fields are required!")
    } else {
        // document.getElementById('height_error').innerHTML = '';
        height_status = true;
        weight_status = true
    }

    // if (heightInch === "" || isNaN(heightInch) || (heightInch < - 0)) {
    //     // document.getElementById('height_error').innerHTML - 'Please provide a valid height';
    //     alert("Please provide a valid height")
    // } else {
    //     // document.getElementById('height_error').innerHTML = '';
    //     height_status = true;
    // }

    // if (weight === '' || isNaN(weight) || (weight <= 0)) {
    //     // document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    //     alert("Please provide a valid weight")
    // } else {
    //     // document.getElementById('weight_error').innerHTML = '';
    //     weigh_status = true;
    // }
    console.log("values:", heightFeet, heightInch, weight)
    // convert height from feet inches to centimeter
    if(heightFeet && heightInch) {
        const feetToMeter = heightFeet * feetToMeterConversionRate
        const inchesToMeter = heightInch * inchesToMeterConversionRate
        height = feetToMeter + inchesToMeter
    }
    console.log("This is height to Check", height)
    if (height_status && weight_status) {
        const bmi = (weight / ((height * height))).toFixed(2);
        // const bmi = weight / (height)

        console.log("This is bmi", bmi)
        if (bmi < 18.6) {
            result.innerHTML = 'under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'over weight : ' + bmi;
        }
    }else{
        // alert('The form has error');
        result.innerHTML = ''
    }

});