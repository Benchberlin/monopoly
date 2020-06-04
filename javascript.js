const gameBoard = [
  50,
  100,
  50,
  -100,
  -40,
  20,
  -1500,
  300,
  -50,
  100,
  50,
  60,
  -40,
  20,
  -400,
  200,
];

function colorElementRed(id) {
  if (id == 0) {
    id = 1;
  }
  console.log(id);
  let converted = "id" + id;
  console.log(converted);
  var el = document.getElementById(converted);
  el.style.backgroundColor = "red";
}

function colorElementBlue(id) {
  if (id == 0) {
    id = 1;
  }
  console.log(id);
  let converted = "id" + id;
  console.log(converted);
  var el = document.getElementById(converted);
  el.style.backgroundColor = "blue";
}

function resetAllColors(id) {
  if (id == 0) {
    id = 1;
  }
  let converted = "id" + id;
  var el = document.getElementById(converted);
  console.log(converted);
  el.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
}

const player1 = {
  name: "Adrian",
  cash: 1000,
  position: 0,
  move: function () {
    resetAllColors(this.position);
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dicePlayer1").innerText = dice;
    this.position = (this.position + dice) % gameBoard.length;
    this.cash += gameBoard[dice];
    if (this.cash < 0) {
      console.log(this.name + " lost the game");
    }

    colorElementBlue(this.position);
    console.log(
      this.name +
        " diced " +
        dice +
        " is in Position " +
        this.position +
        " and won " +
        gameBoard[dice] +
        " he now has " +
        this.cash
    );
  },
};

const player2 = {
  name: "Ben",
  cash: 1000,
  position: 0,
  move: function () {
    resetAllColors(this.position);
    let dice = Math.floor(Math.random() * 6) + 1;
    // console.log(2 % gameBoard.length)
    document.getElementById("dicePlayer2").innerText = dice;
    this.position = (this.position + dice) % gameBoard.length;

    this.cash += gameBoard[dice];
    if (this.cash < 0) {
      console.log(this.name + "lost the game");
    }
    colorElementRed(this.position);
    console.log(
      this.name +
        " diced " +
        dice +
        " is in Position " +
        this.position +
        " and won " +
        gameBoard[dice] +
        " he now has " +
        this.cash
    );
  },
};

function startGame() {
  console.log("Helo!");
  document.getElementById("player1Name").innerText = player1.name;
  document.getElementById("player2Name").innerText = player2.name;

  document.getElementById("player1Cash").innerText = player1.cash;
  document.getElementById("player2Cash").innerText = player2.cash;
}

startGame();

let button1 = document.getElementById("btn-player1");

button1.onclick = function () {
  player1.move();
};

let button2 = document.getElementById("btn-player2");

button2.onclick = function () {
  player2.move();
};
