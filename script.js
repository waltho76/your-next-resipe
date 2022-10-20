let button = document.querySelector("#searchButton")
button.addEventListener("click", getData)

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
        
        recipeTitle.innerText = res.meals[0].strMeal
        recipeImg.setAttribute("src", res.meals[0].strMealThumb)
        recipeDesc.innerText=res.meals[0].strInstructions
    })   
}

