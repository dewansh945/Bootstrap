var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImagesource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesource1 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👑Player 1 wins👑"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "👑Player 2 wins👑"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}
