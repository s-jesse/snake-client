const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  messages } = require("./constants");

let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (key === "q" || key === "f" || key === "e" || key === "z" || key === "x" || key === "c" || key === "r" || key === "v") {
    connection.write(`Say: ${messages[1]}`);
  } else {
    connection.write(`Say: ${messages[2]}`);
  }

};
module.exports = {
  setupInput
};