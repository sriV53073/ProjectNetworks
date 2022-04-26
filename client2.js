const io = require('socket.io-client');
var readlineSync = require('readline-sync');
const socket = io.connect('http://localhost:1337/');
socket.on('connect', () => {
  console.log('Successfully connected!\n');
  console.log("Enter the function you want to be sent over")
  // delete the function below
  socket.on('helloRep', function (data) {
    console.log("Value Of Function is " + data.val)// We are using room of socket io
    console.log("Enter the function you want to be sent over")
  });
  // add a function where you socket.on('answer') console.log(data.answer)
});
var name1 = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name1}!`)
  n1 = name1;
  socket.emit('join', {name: name1});
  var stdin = process.openStdin();
  stdin.addListener("data", function(d) {
      // note:  d is an object, and when converted to a string it will
      // end with a linefeed.  so we (rather crudely) account for that  
      // with toString() and then trim() 
      if(d.toString().toLowerCase().trim() === "exit")
      {
        socket.emit('exit', {name: n1});
        console.log("You have exited\n");
        process.exit(1);
      }
      else
      {
        socket.emit('hello', {val: d.toString().trim(), name:n1});
      }
    });


// While( true)
// get the user input for the artithimetic function
//socket.emit('func',{val:arithfunc});
//if input is exit
//socket.emit'exit'
//exit while and close
//Exit while
//delete