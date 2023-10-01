const btnEl = document.getElementById("btn");
const resaltEl = document.getElementById("result-anime");
const animeName = document.getElementById("anime-name");
const animeImg = document.getElementById("anime-img");


const url = "https://api.api-ninjas.com/v1/cats?family_friendly=5"
const apiKey = "0yx07RCTSIf1RnP8LdH8Ng==fBkKEcz13xGlmVbU"


async function getAnime(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Getting Cat ...";
        animeImg.display = 'block';
        animeName.innerText = "...";
        animeImg.src = "loading.svg"
        const response = await fetch(url, {
            method : 'GET',
            headers: { 'X-Api-Key': apiKey,
             },
        });
        const randomNum = Math.round(Math.random()*20)
        const data= await response.json();
    
        console.log(data[randomNum])
        animeImg.src = data[randomNum].image_link;
        animeName.innerText = data[randomNum].name;

        resaltEl.style.display = "block";
        btnEl.disabled = false;
        btnEl.innerText = "Get another cat";
        
    } catch (error) {
        btnEl.innerText = "Get A Cat";
        btnEl.disabled = false;
        animeName.innerText = "Something went wrong please try again :("


    }
    

    

    


    
}

btnEl.addEventListener("click" ,getAnime);