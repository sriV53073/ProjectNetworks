# ProjectNetworks
Overview

This is app I created with my team members That creates a socket that accepts multi connection using socket.io. And some test clients who connect to the socket

Features

The socket accepts multiple connections, and on the first connection the client provides an identifier. Which is used to create a one one connection with the client based on the identifier and is used to maintain a log for the identifier. The log is maintained
in a file that is the same name as the identifier. If there exists no file with the same name as identifier, the socket creates a file.The socket waits and listens for the client to send math problems in the stream and the socket
answers said problems and emits back the answer. And then logs the problem. The Client can also end the connection, which closes the stream with the socket. If a clients send a get request on the log route. The server sends back the file with the name paramater the client sent.

Cloning You can clone the repo if you want to use it and change the code based on what you need.

Deployment Link for Back-end : https://calculator-socket.herokuapp.com/
Deployment Link For Front-end: https://sri-calculator.herokuapp.com/


License

100% free to use and open source. 🙈 🙉 🙊
