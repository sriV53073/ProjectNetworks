# ProjectNetworks
Overview

This is app I created with my team members That creates a socket that accepts multi connection using socket.io. And some test clients who connect to the socket

Features

The socket accepts multiple connections, and on the first connection you provide an identifier. Which is used to maintain a log for the identifier. The log is maintained
in a file that is the same name as the identifier. If there exists no file with the same name as identifier. The client, can send math problems in the stream and the socket
answers said problems. And then logs the problem. The Client can also end the connection, which closes the stream with the socket. If a client send a get request on the log route. The server sends back the file with the name paramater the client sent.

Cloning You can clone the repo if you want to use it and change the code based on what you need.

Deployment Link for Back-end : https://calculator-socket.herokuapp.com/



License

100% free to use and open source. 🙈 🙉 🙊
