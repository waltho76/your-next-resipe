let button = document.querySelector("#searchButton")

//use Event as a parameter
async function getData (event) {
event.preventDefault()
let textInput = document.querySelector("#inputBar").value.toLowerCase()
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?s=${textInput}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("success!", res.meals)
        let recipeTitle = document.querySelector("#recipeTitle")
        let recipeImg = document.querySelector(`#imgIns`)
        let recipeList = document.querySelector(`#recipeList`)
       // let moves = document.querySelector(`#moves`)

       
        recipeTitle.innerText = res.meals.strMeal

        recipeImg.innerHTML = `<img src="${res.meals.strMealThumb}"/>`

        recipeList.innerHTML = ``
        res.meals.forEach((rl) => {return recipeList.innerHTML += `<li>“${rl.meal}“</li>`})

        
    })
    
    
}
button.addEventListener("click", getData);