const io = require('socket.io-client');
const socket = io.connect('http://localhost:1337/');
socket.emit('join', {name: "Sri"});
socket.emit('hello', {val: "hello", name:"Sri"});
socket.on('connect', () => {
  console.log('Successfully connected!');
  socket.on('helloRep', function (data) {
    console.log(data.val)// We are using room of socket io
  });
});