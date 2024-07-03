//1-On crée deux varaiables, firstCard et secondCard
//On défini leur valeur par un numéro au hasard entre 2 et 11

let firstCard = 6
let secondCard = 9


//3-On crée une variable, sum, qui nous permet d'additionner les deux cartes

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card ?")
} else if (sum === 21) {
    console.log("You've got BlackJack !")
} else if (sum > 21) {
    console.log("You're out of the game !")
}