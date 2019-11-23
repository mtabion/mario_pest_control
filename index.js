const goombasLi = document.getElementById("goombas");

const goombasChildrenArray = goombasLi.children;
console.log(goombasChildrenArray)

const goombasPrice = 5

goombasChildrenArray[0].textContent = `Goombas:`

goombasChildrenArray[2].textContent = `Price: ${goombasPrice} coins`

const goombasInput = goombasChildrenArray[3].children[0]
console.log(goombasInput)

totalGoombasOnly = () => {
    goombasChildrenArray[4].textContent = goombasInput.value * goombasPrice
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
}
cheepsInput.addEventListener("click", totalCheepsOnly)


const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

function addHeading(e) {
    e.preventDefault()
    result.textContent = "The bill is: $" + Number((goombasInput.value * goombasPrice) +
        (bobomsInput.value * bobomsPrice) +
        (cheepsInput.value * cheepsPrice))
}
calculate.addEventListener("click", addHeading)