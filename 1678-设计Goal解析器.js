const interpret = function (command) {
  if (!command) return command;
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      str += "G";
      continue
    }
    if (command[i] === "(" && command[i + 1] === ")") {
      str += "o";
      i += 1;
    } else {
      str += "al";
      i += 3;
    }
  }
  return str;
};
