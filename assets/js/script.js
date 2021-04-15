var difficulty = parseInt(prompt("Scegli una difficoltà tra 0, 1 e 2"));

if (difficulty == 0) {

  var maxNums = 100;

} else if (difficulty == 1) {

  var maxNums = 80;

} else if (difficulty == 2) {

  var maxNums = 50;

} else {

  alert("Dato non valido, riprova.");

}

var numBombs = 16;

var maxTries = maxNums - numBombs;
var arrayBombs = bombsGenerator(numBombs,maxNums);
var arrayNumPlayed = [];

var text = "";
var textInserted = "";
var textBombs = "";

var gameEnded = false;

while (gameEnded === false) {

  var number = parseInt(prompt("Inserisci un numero:"));

  if (arrayNumPlayed.includes(number) === true) {

    alert("Attenzione! Hai già inserito questo numero.\nRiprova.")

  } else if (arrayBombs.includes(number) === true) {

    text += "Hai perso.\nHai fatto " + arrayNumPlayed.length + " tentativi.\nIl numero " + number + " era una bomba.";
    textInserted += number;
    gameEnded = true;

  } else if (number > maxNums) {

    alert("Attenzione! Il numero inserito è superiore a " + maxNums + ".\nInserisci un numero più basso.");

  } else if (number < 1) {

    alert("Attenzione! Il numero inserito è inferiore a 1.\nInserisci un numero più alto.");

  } else if (isNaN(number)) {

    alert("Attenzione! Non ha inserito un numero.\nRiprova");

  } else {

    arrayNumPlayed.push(number);

    textInserted += number + ", ";

    if(maxTries === arrayNumPlayed.length) {

      text += "COMPLIMENTI, HAI VINTO!";
      gameEnded = true;

    }

  }

}

function bombsGenerator(bombs,max) {

  var bombsArray = [];

  while (bombsArray.length < bombs) {

    var bombPlace = randomNumber(max);

    if (bombsArray.includes(bombPlace) === false) {

      bombsArray.push(bombPlace);

    }

  }

  textBombs += bombsArray;

  return bombsArray;

}

function randomNumber(num) {
   
  return Math.ceil(Math.random() * num);

}

document.getElementById('result').innerHTML = text;
document.getElementById('numInserted').innerHTML = textInserted;
document.getElementById('numBombs').innerHTML = textBombs;