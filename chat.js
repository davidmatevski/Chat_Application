// Connects to Socket.IO server.
const socket = io();

// Event listener for 'send' button clicks.
document.getElementById("send").addEventListener("click", () => {
  // Get text input value.
  const text = document.getElementById("input").value;
  // Emit 'chat message' event with input text as data.
  socket.emit("chat message", text);
  // Clear the input field.
  document.getElementById("input").value = "";
});

// Event listener for 'chat message' events.
socket.on("chat message", (msg) => {
  // Creates a new list item.
  const item = document.createElement("li");
  // Sets list item text to message text.
  item.textContent = msg;
  // Appends new list item to the message list.
  document.getElementById("messages").appendChild(item);
});
