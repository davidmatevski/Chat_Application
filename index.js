// Import required modules
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Serve static files from the current directory
app.use(express.static(__dirname));

// Set up connection with client
io.on("connection", (socket) => {
  console.log("a user connected");

  // Listen for a chat message and broadcast to all users
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  // Log when a user disconnects
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server on port 3000
http.listen(3000, () => {
  console.log("listening on *:3000");
});
