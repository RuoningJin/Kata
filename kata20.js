const blocksAway = function(directions) {
  let dir = {east: 0, north: 0};
  let facing = '';
  for (i = 0; i < directions.length; i++) {
    if (directions[i] === 'right' && facing === '') {
      dir.east += (directions[i + 1]);
      facing = 'E'
    } else if (directions[i] === 'left' && facing === '') {
      dir.north += (directions[i + 1]);
      facing = 'N';
    } else if (directions[i] === 'right' && facing === 'N') {
      dir.east += (directions[i + 1]);
      facing = 'E'
    } else if (directions[i] === 'right' && facing === 'S') {
      dir.east -= (directions[i + 1]);
      facing = 'W';
    } else if (directions[i] === 'right' && facing === 'W') {
      dir.north += (directions[i + 1]);
      facing = 'N';
    } else if (directions[i] === 'right' && facing === 'E') {
      dir.north -= (directions[i + 1]);
      facing = 'S';
    } else if (directions[i] === 'left' && facing === 'N') {
      dir.east -= (directions[i + 1]);
      facing = 'W';
    } else if (directions[i] === 'left' && facing === 'S') {
      dir.east += (directions[i + 1]);
      facing = 'E';
    } else if (directions[i] === 'left' && facing === 'W') {
      dir.north -= (directions[i + 1]);
      facing = 'S';
    } else if (directions[i] === 'left' && facing === 'E') {
      dir.north += (directions[i + 1]);
      facing = 'N';
    }
  };
  return dir;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));