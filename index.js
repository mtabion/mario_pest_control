// Pricing:
// Goombas: 5 Coins  (Li ID = "goombas")
// Bob-ombs: 7 Coins (Li ID = "boboms")
// Cheep-cheeps: 11 Coins (Li ID = "cheeps")
const goombasLi = document.getElementById("goombas");
const goombasChildrenArray = goombasLi.children;
console.log(goombasChildrenArray) //This array looks like this: [[0]h2, [1]img, [2]p, [3]label, [4]h3]. 
    //Notice input is NOT direct children of the li, because it is children of the label instead. 
const goombasPrice = 5

goombasChildrenArray[0].textContent = `Goombas:`
goombasChildrenArray[2].textContent = `Price: ${goombasPrice} coins`

const goombasInput = goombasChildrenArray[3].children[0] //this means input is the [0](only) child of label. 

console.log(goombasInput) // <= Nan unless you write a number here. 
totalGoombasOnly = () => {
    goombasChildrenArray[4].textContent = goombasInput.value * goombasPrice
}
goombasInput.addEventListener("click", totalGoombasOnly)


////Now i just copy this and change all goombas for boboms and cheeps. 
//I usually use loop instead, but i didn't want it to get complicated.

const bobomsLi = document.getElementById("boboms");
const bobomsChildrenArray = bobomsLi.children;
console.log(bobomsChildrenArray) //This array looks like this: [[0]h2, [1]img, [2]p, [3]label, [4]h3]. 
    //Notice input is NOT direct children of the li, because it is children of the label instead. 
const bobomsPrice = 7
bobomsChildrenArray[0].textContent = `Boboms:`
bobomsChildrenArray[2].textContent = `Price: ${bobomsPrice} coins`

const bobomsInput = bobomsChildrenArray[3].children[0] //this means input is the [0](only) child of label. 

console.log(bobomsInput) // <= Nan unless you write a number here. 
totalBobomsOnly = () => {
    bobomsChildrenArray[4].textContent = bobomsInput.value * bobomsPrice
}
bobomsInput.addEventListener("click", totalBobomsOnly)

//and cheeps.
const cheepsPrice = 11;
const cheepsLi = document.getElementById("cheeps");
const cheepsChildrenArray = cheepsLi.children;
console.log(cheepsChildrenArray) //This array looks like this: [[0]h2, [1]img, [2]p, [3]label, [4]h3]. 
    //Notice input is NOT direct children of the li, because it is children of the label instead. 
cheepsChildrenArray[0].textContent = `Cheep-cheeps:`
cheepsChildrenArray[2].textContent = `Price: ${cheepsPrice} coins`

const cheepsInput = cheepsChildrenArray[3].children[0] //this means input is the [0](only) child of label. 

console.log(cheepsInput) // <= Nan unless you write a number here. 
totalCheepsOnly = () => {
    cheepsChildrenArray[4].textContent = cheepsInput.value * cheepsPrice
}
cheepsInput.addEventListener("click", totalCheepsOnly)

// A footer showing:
// Mario's email address
// Mario's company website url
// Mario's physical address


//For the EXTRA CREDIT, we can add media queries in CSS.