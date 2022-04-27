//Socket information used to connect to Index.js
const io = require('socket.io-client');
var readlineSync = require('readline-sync');
const socket = io.connect('http://localhost:1337/');

//See if the link between client and index was made and get a equation
socket.on('connect', () => {
  console.log('Successfully connected!\n');
  console.log("Enter the function you want to be sent over")
  
  //Print the result of the equation and then repeat until terminated
  socket.on('helloRep', function (data) {
    console.log("Value Of Function is " + data.val)
    console.log("Enter the function you want to be sent over")
  });
});

//Request the name of the user, and print it back
var name1 = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name1}!`)
  n1 = name1;

  //try to connect to Index.js
  socket.emit('join', {name: name1});
  var stdin = process.openStdin();

  stdin.addListener("data", function(d) {
      //see if an exit statment is sent, if exit was sent terminate the process 
      if(d.toString().toLowerCase().trim() === "exit")
      {
        socket.emit('exit', {name: n1});
        console.log("You have exited\n");
        process.exit(1);
      }
      //If there was no exit sent, send the string as the name of the user
      else
      {
        socket.emit('hello', {val: d.toString().trim(), name:n1});
      }
    });