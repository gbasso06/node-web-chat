const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	// socket.emit('newEmail', {
	// 	from: 'ritinha@invejosas.com',
	// 	text: 'Te pego na saída falsiane',
	// 	createAt:123
	// });

	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail);
	});

	socket.on('disconnect', () => {
		console.log("Client disconnected");
	});

	socket.on('createMessage', (newMessage) => {

		socket.emit('newMessage', {
			from: newMessage.from,
			text: newMessage.text,
			createAt:123
		});

		console.log("createMessage", newMessage);
	});
});

server.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});

// console.log(__dirname + '/../public');
// console.log(publicPath);