const btnEl = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");



const emojis=[]

async function getEmoji(){
    const request = await fetch("https://emoji-api.com/emojis?access_key=48233ad9d5319b6e3c04f9d5e8d8e2e5b406b77a")
    const data = await request.json();
    for(let i=0; i < 1500; i++) {
        emojis.push({
            charachter: data[i].character,
            unicode: data[i].unicodeName,
        })
    };
};
getEmoji()



btnEl.addEventListener("click",() =>{
        const randomNum = Math.round(Math.random()*emojis.length);
        btnEl.innerText = emojis[randomNum].charachter;
        emojiName.innerText = emojis[randomNum].unicode;
})