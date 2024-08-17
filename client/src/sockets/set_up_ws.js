import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_BACKEND;
const socket = io(SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket", "polling"],
});

export const connect_socket = () => {
  socket.connect();
  socket.on("connect", () => {
    console.log("Socket connected");
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });
};

export const disconnect_socket = () => {
  socket.disconnect();
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
};

export const get_socket = () => {
  return socket;
};
