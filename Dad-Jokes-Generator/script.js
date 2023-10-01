const btnEl = document.getElementById("btn");

const apiKey = "0yx07RCTSIf1RnP8LdH8Ng==fBkKEcz13xGlmVbU";

const options={
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {
    try {
        document.getElementById("joke").innerText="Making Joke...";
    btnEl.disabeld=true;
    btnEl.innerText="Loading...";
    const response = await fetch(apiUrl,options);
    const data = await response.json();
    
    document.getElementById("joke").innerText=(data[0]).joke;
    btnEl.disabeld=false;
    btnEl.innerText="Tell me a joke";
    } catch (error) {
        document.getElementById("joke").innerText="something went wrong try agin leter :)";
        btnEl.disabeld=false;
    btnEl.innerText="Tell me a joke";
    }
    
}


btnEl.addEventListener("click", getJoke);