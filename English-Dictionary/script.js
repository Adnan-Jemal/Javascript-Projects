const inputData = document.getElementById("input");
const infotxt = document.getElementById("infotxt");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const defenition = document.getElementById("meaning");
const audio = document.getElementById("audio");


async function fetchApi(word){
    try {
        infotxt.style.display= "block";
        meaningContainer.style.display= "none";
        infotxt.innerText= `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());
        console.log(result);
        if (result.title){
            meaningContainer.style.display= "block";
            infotxt.style.display= "none";
            title.innerHTML = word;
            defenition.innerHTML = "<strong>meaning not found :(</strong>";
            audio.style.display="none";
        }
        else{
            infotxt.style.display= "none";
            meaningContainer.style.display= "block";
            audio.style.display="inline-flex";
            title.innerHTML = `<strong>${result[0].word}</strong>`;
            defenition.innerHTML = `<strong>${result[0].meanings[0].definitions[0].definition}</strong>`;
            audio.src = result[0].phonetics[0].audio;
        }

        

    } catch (error) {
        meaningContainer.style.display = "none"
        infotxt.style.display = "block";
        infotxt.innerText = "Some thing went wrong try agin :(";
        
    }
    
}

inputData.addEventListener("keyup",(e) =>{
    if(e.target.value && e.key === "Enter"){
        fetchApi(e.target.value)
    }
})