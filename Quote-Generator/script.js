const btnEl = document.getElementById("btn");
const qouteEl = document.getElementById("quote");
const authorEl = document.getElementById("sayer");



async function getQoute(){
    try {
        btnEl.disabled =true;
        btnEl.innerText = "Loading ..."
        qouteEl.innerText = " Getting Qoute ... ";
        authorEl.innerText = "..."
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        qouteEl.innerText = data.content;
        authorEl.innerText = `~${data.author}`
        btnEl.disabled =false;
        btnEl.innerText = "Get A Quote";

    } catch (error) {
        qouteEl.innerText = " Something went wrong try agin :( ";
        authorEl.innerText = "error"
        btnEl.innerText = "Get A Quote";
        btnEl.disabled =false;
    }
    
}
getQoute();

btnEl.addEventListener("click", getQoute);
