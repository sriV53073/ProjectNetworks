const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fd =  require('fs');
const fs = require('fs').promises;
const port = process.env.PORT || 1337;
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});
io.on('connection', (socket) => {
    console.log('a user connected');
   // console.log(socket.id);
    socket.on('join', function (data) {
      try { // Create files directory if not exists
        if (!fd.existsSync(data.name+".txt"))
        {
         fs.appendFile(data.name+".txt", data.name + " is logged in\n", 'utf8');
        }
        else
        {
          fs.appendFile(data.name+".txt", data.name + " is logged in\n", 'utf8');
        }
      } catch (e) {
        console.log.error("error:" + e)
      }
        socket.join(data.name);
        // you check if the name was created before, if it was you acess the text file, if not you create new text file for that name
      });
      //socket.on math thats arithemitic and send to that specific client the answer
      // socket.on for close
      // delete this 
      socket.on('hello', function (data) {

 (async () => {
    await fs.appendFile(data.name+".txt", data.val + "\n", 'utf8');
  })();
        try{
        var num = eval(data.val);
        io.sockets.in(data.name).emit('helloRep', {val:num });
        }
        catch{
        io.sockets.in(data.name).emit('helloRep', {val:"Error"});
        }
        
      });
      socket.on('exit', function (data){
        console.log(data.name + " has exited");
        (async () => {
          await fs.appendFile(data.name+".txt", data.name + " has exited\n", 'utf8');
        })();
      });
    //socket.on('funk')
    // you get a arifunc in data, you tokenize that function and run and send the ans back to client, you have to log on that specific client name text file
    // exit, search up how to force close client connection in socket.io
    //socket.on('exit')
    socket.on('disconnect', () => {
      //console.log('user disconnected');
    });
  });
  // text file, you just log the arthimetic function into a text file, with the name and function asked. One folder and 
  //we should find a way to track time server side