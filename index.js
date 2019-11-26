const goombasLi = document.getElementById("goombas");
//choose goomas li element
const goombasChildrenArray = goombasLi.children;
// console.log(goombasChildrenArray)

const goombasPrice = 5 //goombas price

goombasChildrenArray[0].textContent = `Goombas:`
    //h2 name change to actual name of pest
goombasChildrenArray[2].textContent = `Price: ${goombasPrice} coins`
    //price alone changes to price with with actual price

//chooses label tag, gets its children. Chooses input child
const goombasInput = goombasChildrenArray[3].children[0]
    console.log(goombasInput)

totalGoombasOnly = () => {
    goombasChildrenArray[4].textContent = goombasInput.value * goombasPrice
    goombasChildrenArray[4].style.fontSize = "2.5em"
}
goombasInput.addEventListener("click", totalGoombasOnly)

const bobomsLi = document.getElementById("boboms");

const bobomsChildrenArray = bobomsLi.children;
console.log(bobomsChildrenArray)

const bobomsPrice = 7

bobomsChildrenArray[0].textContent = `Bob-oms:`

bobomsChildrenArray[2].textContent = `Price: ${bobomsPrice} coins`

const bobomsInput = bobomsChildrenArray[3].children[0]
console.log(bobomsInput)

totalBobomsOnly = () => {
    bobomsChildrenArray[4].textContent = bobomsInput.value * bobomsPrice
    bobomsChildrenArray[4].style.fontSize = "2.5em"
}
bobomsInput.addEventListener("click", totalBobomsOnly)

const cheepsPrice = 11;

const cheepsLi = document.getElementById("cheeps");

const cheepsChildrenArray = cheepsLi.children;
console.log(cheepsChildrenArray)

cheepsChildrenArray[0].textContent = `Cheep-cheeps:`

cheepsChildrenArray[2].textContent = `Price: ${cheepsPrice} coins`

const cheepsInput = cheepsChildrenArray[3].children[0]
console.log(cheepsInput)

totalCheepsOnly = () => {
    cheepsChildrenArray[4].textContent = cheepsInput.value * cheepsPrice
    cheepsChildrenArray[4].style.fontSize = "2.5em"
}
cheepsInput.addEventListener("click", totalCheepsOnly)


const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

function addHeading(e) {
    e.preventDefault()
    result.textContent = (goombasInput.value * goombasPrice) + (bobomsInput.value * bobomsPrice) + (cheepsInput.value * cheepsPrice)
}
calculate.addEventListener("click", addHeading)