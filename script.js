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
        let ingredients = document.querySelector(`#ingredients`)
        // let measure = document.querySelector(`#measure`)
    
        recipeTitle.innerText = res.meals[0].strMeal
        recipeImg.setAttribute("src", res.meals[0].strMealThumb)
        //ingredients.innerText=res.meals[0].strIngredient1
        measure.innerText=res.meals[0].strMeasure1

    function ingredients(meal) {
        const ingredients = []
        for(i = 1; i<=20; i++) {
            if(meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} -
                    ${meal[`strMeasure${i}`]}`
                    )
            } else {
                break;
            }
        }
    }
        <ul>
            ${ingredients.map(ingredient => `
            <li>$ingredient}</li>`)
            }
        </ul>
        recipeDesc.innerText=res.meals[0].strInstructions
    })
}

