function generateBoard () {
  let board = [];
  for (y = 0; y < 8; y++) {
    let boardX = [];
    for (x = 0; x < 8; x++) {
      boardX.push(0);
    }
    board.push(boardX);
  }
  return board;
}
console.log(generateBoard());
