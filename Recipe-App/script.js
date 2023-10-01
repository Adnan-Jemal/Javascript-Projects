const apiKey = "ae8fe118f38d40b6a8e949af36f11ebd"

const listRcipeEl= document.getElementById("recipe-list")


function displayRecipes(recipes){
    console.log(recipes)
    listRcipeEl.innerHTML=''
    recipes.forEach(rcpi => {
        const recipeItem = document.createElement("li")
        recipeItem.classList.add('recipe-item')
        const recipeImg = document.createElement("img")
        recipeImg.classList.add("img")
        recipeImg.src=rcpi.image
        const recipeTitle = document.createElement("h2")
        recipeTitle.classList.add("recipe-name")
        recipeTitle.innerText = rcpi.title
        const ingridients = document.createElement("p")
        ingridients.classList.add('ingredients')
        
        
        ingridients.innerHTML = `<strong >ingredients: </strong>${
            rcpi.extendedIngredients.map(ingrident => ingrident.original).join(", ")
        }.`
            
        
        const recipeBtn = document.createElement("a")
        recipeBtn.classList.add('btn')
        recipeBtn.target ="_blank"
        
        recipeBtn.href = rcpi.sourceUrl
        recipeBtn.innerText= "View Recipe"

        listRcipeEl.appendChild(recipeItem)
        recipeItem.appendChild(recipeImg)
        recipeItem.appendChild(recipeTitle)
        recipeItem.appendChild(ingridients)
        recipeItem.appendChild(recipeBtn)
        
        
    });
}



async function getRecipe(){
    const rsponse = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)
    const data = await rsponse.json()
   
    return data.recipes
}


async function init(){
    const recipes = await getRecipe()
    displayRecipes(recipes)
}

init()