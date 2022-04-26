const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 1337;

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});
io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id);
    socket.on('join', function (data) {
        socket.join(data.name);
        // you check if the name was created before, if it was you acess the text file, if not you create new text file for that name
      });
      //socket.on math thats arithemitic and send to that specific client the answer
      // socket.on for close
      // delete this 
      socket.on('hello', function (data) {
        var num = eval(data.val)
        io.sockets.in(data.name).emit('helloRep', {val:num });
      });
      
    //socket.on('funk')
    // you get a arifunc in data, you tokenize that function and run and send the ans back to client, you have to log on that specific client name text file
    // exit, search up how to force close client connection in socket.io
    //socket.on('exit')
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  // text file, you just log the arthimetic function into a text file, with the name and function asked. One folder and 
  //we should find a way to track time server side