/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
  if (moves.length % 2 !== 0) return false;
  const obj = {
    "R": 0,
    "L": 0,
    "U": 0,
    "D": 0
  };
  for (const move of moves) {
    obj[move]++
  }
  return obj["R"] === obj["L"] && obj["U"] === obj["D"]
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("RLUURDDDLU"));
