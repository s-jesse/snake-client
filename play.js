//const net = require("net");

const {connect} = require("./client.js");
const {setupInput} = require("./input.js");


// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   } else {
//     process.stdout.write('.');
//   }
// };

// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput = (key) => {
//     // review why is key passed as argument !!!!
//     if (key === '\u0003') {
//       process.exit();
//     } else {
//       process.stdout.write('.');
//     }
//   });
// };

//console.log('after callback');

//establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost", // IP address here,
//     port: 50541 // PORT number here,
//   });

//   conn.on("connect", () => {
//     console.log("you ded cuz you idled"); // code that does something when the connection is first established
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };d

//connect();
console.log("Connecting ...");

setupInput(connect());


