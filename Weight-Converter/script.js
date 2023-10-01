const poundEl = document.getElementById("pounds");
const resultEl = document.getElementById("results");
const errorEl = document.getElementById("error");


poundEl.addEventListener("input",() => {
    if(poundEl.value<=0 || isNaN(poundEl.value)){
        errorEl.style.display = "block"
        poundEl.value= ""
        resultEl.innerText= ''
        setTimeout(()=>{
            errorEl.style.display = "none"
        }, 3000)
    }
    else{
        const kgs = (poundEl.value * 0.45359237).toFixed(2)
        resultEl.innerText= `Weight in KG : ${kgs}`
        setTimeout(() => {
            poundEl.value= ""
            resultEl.innerText= ''
        }, 10000);
    }
   
})