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
