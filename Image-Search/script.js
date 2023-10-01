const accesKey = "K9bdqrmgDhfGrAC2CWwaYTLvZZ4V_nldcsk-Pwh1_x8";

const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input");
const searchResultEl = document.getElementById("results");
const showMoreEl = document.getElementById("show-more")


let inputData = ""
let page = 1
async function searchImgs(){
    inputData = searchInputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesKey}`
    const respons = await fetch(url)
    const data = await respons.json()


    

    const results = data.results;

    results.map((result)=>{
        
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("result-item")
        const resultImg = document.createElement("img")
        resultImg.src=result.urls.small;
        const imglink = document.createElement("a")
        imglink.href = result.links.html
        imglink.target="_blank"
        imglink.textContent = result.alt_description;

        imageWrapper.appendChild(resultImg)
        imageWrapper.appendChild(imglink)
        searchResultEl.appendChild(imageWrapper);
        
    })
    page++
    

    if(page>1){
        showMoreEl.style.display='block';
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page= 1
    searchImgs()
    
})


showMoreEl.addEventListener("click",()=>{
    searchImgs()
})

