if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 8080;
const http = require('http').Server(app);
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Socket IO connection
const socketIO = require('socket.io')(http, {
    cors: {
        origin: process.env.FRONTEND_URL
    }
});

//Add this before the app.get() block
console.log("Socket .io is: ", socketIO);
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

// Routes
app.get('/api', (req, res) => {
    console.log("GET route hit!");
})

// Server
http.listen(BACKEND_PORT, () => {
    console.log(`Server listening on ${BACKEND_PORT}`);
});