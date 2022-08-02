//the imports
var cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
const { readdir } = require('fs/promises');
app.use(cors());
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
//io.set('origins', 'http://localhost:3000/');
//io.origins('*:*');
const fd =  require('fs');
const fs = require('fs').promises;
const port = process.env.PORT || 1337;

//Listen to the port for clients
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});

//When connected to a client
io.on('connection', (socket) => {
  //Get the starting time, and log the user as connected
  var timetracker = Date.now();
    console.log('a user connected');

    //Create a file, or append an existing file when the client joins
    socket.on('join', function (data) {
      try { 
        // Create files directory if not exists
        if (!fd.existsSync(data.name+".txt"))
        {
         fs.appendFile(data.name+".txt", data.name + " is logged in\n", 'utf8');
        }
        //If the file exists it will append to the end
        else
        {
          fs.appendFile(data.name+".txt", data.name + " is logged in\n", 'utf8');
        }
      }
      //If it fails to create a file report error
      catch (e) {
        console.log.error("error:" + e)
      }

      //creates a private room between the client and the server
        socket.join(data.name);
      });
      app.get('/log', (req, res) => {
        res.download(path.resolve(`./${req.query.name}.txt`));
      })
      app.get('/', (req, res) => {
        res.send("Hello");
      })
      socket.on('logs', async function(data){
        console.log(data.name);
        const matchedFiles = [];

    const files = await readdir("./");
   // console.log(files);
    for (const file of files) {
        // Method 1:
        const filename = path.parse(file).name;
        console.log(filename);
        if (filename === data.name) {
            matchedFiles.push(file);
        }

    }
    console.log(matchedFiles);
    io.sockets.in(data.name).emit('logReturn', {val:matchedFiles});
      })

      //When it's working get the name
      socket.on('hello', function (data) {
        (async () => {
          await fs.appendFile(data.name+".txt", data.val + "\n", 'utf8');
        })();
        //Makes sure the eval function correctly works, if it does return the value to helloRep
        try{
        var num = eval(data.val);
        io.sockets.in(data.name).emit('helloRep', {val:num });
        }
        //if eval doen't work report error
        catch{
        io.sockets.in(data.name).emit('helloRep', {val:"Error"});
        }
      });

      //when exit is typed in terminal
      socket.on('exit', function (data){
        //get the end time and put the exit time in the logs
        timetracker = Date.now() - timetracker;
        console.log(data.name + " has exited after a session lasting "+timetracker+" milliseconds.");
        
        //doesn't allow multiple clients to edit one file at the same time
        (async () => {
          await fs.appendFile(data.name+".txt", data.name + " has exited after a session lasting "+timetracker+" milliseconds.\n", 'utf8');
        })();
      });
    
    //On disconnect
    socket.on('disconnect', () => {
      //console.log('user disconnected');
    });
  });
  