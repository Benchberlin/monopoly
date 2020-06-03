const gameBoard = [
  10,
  100,
  4,
  -40,
  -40,
  40,
  -1500,
  30,
  -50,
  10,
  5,
  6,
  -4,
  2,
  40,
  20,
];

const player1 = {
  name: "Adrian",
  cash: 1000,
  position: 0,
  move: function () {
    let dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % gameBoard.length;
    this.cash += gameBoard[dice];
    if (this.cash < 0) {
      console.log(this.name + " lost the game");
    }
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
    let dice = Math.floor(Math.random() * 6) + 1;
    // console.log(2 % gameBoard.length)
    this.position = (this.position + dice) % gameBoard.length;
    this.cash += gameBoard[dice];
    if (this.cash < 0) {
      console.log(this.name + "lost the game");
    }
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

player1.move();
player2.move();
player1.move();
player2.move();
player1.move();
player2.move();
player1.move();
player2.move();
player1.move();
player2.move();
