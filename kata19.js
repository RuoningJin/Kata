function generateBoard () {
  let board = [];
  for (y = 0; y < 8; y++) {
    let boardX = [];
    for (x = 0; x < 8; x++) {
      if ((y === whiteQueen[0] && x === whiteQueen[1]) || (y === blackQueen[0] && x === blackQueen[1])) {
        boardX.push(1);
      } else {
      boardX.push(0);
      }
    }
    board.push(boardX);
  }
  return board;
}
function queenThreat() {
  return Math.pow((whiteQueen[1] - whiteQueen[0]), 2) === Math.pow((blackQueen[1] - blackQueen[0]), 2)
}
  

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
