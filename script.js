let button = document.querySelector("#searchButton")


async function getData (event) {
event.preventDefault()
let textInput = document.querySelector("#inputBar").value.toLowerCase()
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textInput}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("success!", res.meals)
        let recipeTitle = document.querySelector("#recipeTitle")
        let recipeImg = document.querySelector(`#imgIns`)
        let recipeDesc = document.querySelector(`#recipeDesc`)
        let ingredients = document.querySelector(`#ingredients`)
        let measure = document.querySelector(`#measure`)

       //shows category in header
        recipeTitle.innerText = res.meals[0].strMeal
        recipeImg.setAttribute("src", res.meals[0].strMealThumb)
        ingredients.innerText=res.meals[0].strIngredient1
        measure.innerText=res.meals[0].strMeasure1
        recipeDesc.innerText=res.meals[0].strInstructions
        
        
        
    })
    
    
}

button.addEventListener("click", getData);