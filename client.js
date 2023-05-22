const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    //console.log("you ded cuz you idled"); // code that does something when the connection is first established
    conn.write("Name: JSN")
    conn.write("Move: up")

      //setInterval(() => {conn.write("Move: up")}, 500);
      
    // conn.write("Move: down")
    // conn.write("Move: left")
    // conn.write("Move: right")

});

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}