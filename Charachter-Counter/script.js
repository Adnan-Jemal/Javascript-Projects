const txtAreaEl = document.getElementById("txtarea")
const totalCountEl = document.getElementById('total-counter')

const pcountel = document.getElementById("p")



function updateCounter(){
    let characters = txtAreaEl.value.length;
    totalCountEl.innerText= characters
    pcountel.style.display="block"
    

    

}


if(txtAreaEl.value.length === 0){
    pcountel.style.display="none"
}
else{
    
    pcountel.style.display="block"
}

txtAreaEl.addEventListener("input",()=>{
    updateCounter()
    if(txtAreaEl.value.length === 0){
        pcountel.style.display="none"
    }
    else{
        pcountel.style.display="block"
    }
    
})