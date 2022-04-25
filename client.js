const io = require('socket.io-client');
const socket = io.connect('http://localhost:1337/');
//get the user input
socket.emit('join', {name: "SriSai"});// I used tested the value, change to user input for name
socket.emit('hello', {val: "hiBro", name:"SriSai"});//delete
socket.on('connect', () => {
  console.log('Successfully connected!');
  // delete the function below
  socket.on('helloRep', function (data) {
    console.log(data.val)// We are using room of socket io
  });
  // add a function where you socket.on('answer') console.log(data.answer)
});
// While( true)
// get the user input for the artithimetic function
//socket.emit('func',{val:arithfunc});
//if input is exit
//socket.emit'exit'
//exit while and close
//Exit while
socket.emit('hello', {val: "hiBro392842389", name:"SriSai"});//delete