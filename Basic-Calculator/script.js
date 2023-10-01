const buttonsEl = document.querySelectorAll("button");
const resultsEl = document.getElementById("results")

for(let i=0; i< buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue ==='C'){
            clearResult()
        }
        else if(buttonValue === "="){
            clalcResult()
        }
     
        else {
            appendValue(buttonValue)
        }
    })
}


function clearResult(){
    resultsEl.value = ""
}

function clalcResult(){
    if (resultsEl.value === ""){
        return
    }
    else{resultsEl.value = eval(resultsEl.value)}
    

}

function appendValue(buttonValue) {
        resultsEl.value += buttonValue;
        
}