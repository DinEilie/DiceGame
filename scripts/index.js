// Create a new number between 1 - 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var victoryTitle;

// Change the file location variable
var newSrcImg1 = "images/dice" + randomNumber1 + ".png"
var newSrcImg2 = "images/dice" + randomNumber2 + ".png"

// Determine the winner
if (randomNumber1 > randomNumber2){
    victoryTitle = "Player 1 is victorious! 🤘";
} else if (randomNumber1 < randomNumber2){
    victoryTitle = "Player 2 is victorious! 🤘";
} else {
    victoryTitle = "Draw! 😲";
}

// Update
document.querySelector("img.img1").src = newSrcImg1;
document.querySelector("img.img2").src = newSrcImg2;
document.querySelector("body h1").innerHTML = victoryTitle;
