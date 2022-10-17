let button = document.querySelector("#searchButton")

async function getData (event) {
    event.preventDefault()
let textInput = document.querySelector("#inputBar").value    
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textInput}`)
.then(res => {
    return res.json()
})
.then(res => {
console.log("success!", res.meals[0])
let resipe = document.querySelector("#resipe")
let foodImg = document.querySelector(`#imgIns`)

Types.innerHTML = ``
res.meals.forEach(typ) => {return meals.innerHTML += `<li>"${textInput}"</li>`

})
}





button.addEventListener("click", getData)
