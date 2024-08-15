import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_BACKEND;
const socket = io(SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket", "polling"],
});

export const connect_socket = () => {
  socket.connect();
};

export const disconnect_socket = () => {
  socket.disconnect();
};
