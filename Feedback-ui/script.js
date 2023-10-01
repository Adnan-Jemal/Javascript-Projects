const ratingElements = document.querySelectorAll(".emoji");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating='';

ratingElements.forEach((ratingEL) =>{
    ratingEL.addEventListener("click", (event) =>{
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        selectedRating=event.target.innerText || event.target.parentNode.innerText;
    })
});

btnEl.addEventListener("click", ()=>{
    if (selectedRating!==""){
        containerEl.innerHTML=`
        <h2>Thank You</h2>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <p>We'll use your feedback to improve our product.</p>

        `
    }
})

function removeActive(){
    ratingElements.forEach((ratingEL) => {
        ratingEL.classList.remove("active")
    });
}