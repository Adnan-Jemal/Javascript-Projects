const loanAmountEl = document.getElementById("loan-amount")
const interstRateEl = document.getElementById("interest-rate")
const monthsEl = document.getElementById("month")
const resultEl = document.getElementById("result")

loanAmountEl.addEventListener("input", clacLoan)
interstRateEl.addEventListener("input", clacLoan)
monthsEl.addEventListener("input", clacLoan)

clacLoan()

function clacLoan(){
    const P = loanAmountEl.value 
    const n = monthsEl.value
    const r = (interstRateEl.value/n)/100
    
    const MonthlyPayment = (P * r * (1 + r)**n) / ((1 + r)**n - 1)
    resultEl.innerText =`Monthly Payment: ${MonthlyPayment.toFixed(2)}`
    
}