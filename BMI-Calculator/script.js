const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btnEl = document.getElementById("btn")
const bmiEl = document.getElementById("bmi");
const wgroupEl = document.getElementById("weight-group");
const resultsEl = document.getElementById("results");

btnEl.addEventListener("click",calcBMI)

function calcBMI(){
    const height = heightInput.value
    const weight = weightInput.value
    const bmi = ((weight/height**2)*10000).toFixed(1)
    bmiEl.innerText = bmi
    if (bmi<=18.4){
        wgroupEl.innerText = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        wgroupEl.innerText = "Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9){
        wgroupEl.innerText = "Overweight";
    }
    else{
        wgroupEl.innerText = "Obese";
    }
    resultsEl.style.display = "block"
}