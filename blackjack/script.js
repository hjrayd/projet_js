let player = {
    name: "Per",
    chips: 200,
}
    //1-On déclare deux varaiables, firstCard et secondCard
//On défini leur valeur par un numéro au hasard entre 2 et 11
let cards = [] //array

//3-On crée une variable, sum, qui nous permet d'additionner les deux cartes

let sum = 0
let hasBlackJack = false

//On déclare une variable isAlive et on lui attribue la valeur true

let isAlive = false

//On déclare une variable message 
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById ("sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

//On crée la fonction qui permet de générer une carte aléatoire
function getRandomCard() {
    let randomNumber = Math.floor ( Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
} else {
    return randomNumber
}
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
 
}


function renderGame() {

cardsEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}
sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card ?"
} else if (sum === 21) {
    message = "You've got BlackJack !"
    hasBlackJack = true
} else {
    message = "You're out of the game !"
    isAlive = false
}

messageEl.textContent = message
}

function newCard() {
if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum+= card
    cards.push(card)

    renderGame()
}
}


