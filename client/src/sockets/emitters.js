import { get_socket } from "./set_up_ws";

const socket = get_socket();

export const send_user = (user_id) => {
  if (socket && socket.connected) {
    socket.emit("online", user_id);
  } else {
    console.log("Socket not Connected");
  }
};
