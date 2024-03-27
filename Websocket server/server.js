// server.js
const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 }); // Choose any port you prefer

// Event handler for new WebSocket connections
wss.on('connection', function connection(ws) {
    console.log('Client connected');
    
    // Event handler for messages received from clients
    ws.on('message', function incoming(message) {
        console.log('Received: %s', message);
    });
    
    // Event handler for client disconnections
    ws.on('close', function close() {
        console.log('Client disconnected');
    });
});