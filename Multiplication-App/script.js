const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")
const formEl = document.querySelector("form")
const ansEl = document.getElementById("ans")


const num1=Math.round(Math.random()*10)
const num2=Math.round(Math.random()*10)



questionEl.innerText= `What is ${num1} multiplied by ${num2}?`
const ans = num1 * num2

let score=  JSON.parse(localStorage.getItem("score"))
  
if (!score){
    score=0
}

scoreEl.innerText= `score: ${score}`


formEl.addEventListener("submit", () =>{
    

    const usrans= +ansEl.value
    
    if(usrans !== ans){
        score--
        updateStorage()
    } else if(usrans === ans){
        score++
        updateStorage()
    }
    scoreEl.innerText= `score: ${score}`
    
    
}
)

function updateStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
