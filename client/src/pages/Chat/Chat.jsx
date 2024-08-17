import React, { useEffect } from "react";
import Panel from "../../components/Panel/Panel";
import ChatBox from "../../components/ChatBox/ChatBox";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  connect_socket,
  disconnect_socket,
  get_socket,
} from "../../sockets/set_up_ws";
import { send_user } from "../../sockets/emitters";

function Chat() {
  const chatBox = useSelector((state) => state.chatBox.value);

  useEffect(() => {
    const user_data = JSON.parse(Cookies.get("user_data"));
    connect_socket();
    const socket = get_socket();
    socket.on("connect", () => {
      send_user(user_data.user_id);
    });

    return () => {
      disconnect_socket();
    };
  }, []);

  return (
    <div className="h-dvh md:flex">
      <section
        className={`${
          chatBox ? "max-md:hidden " : ""
        } md:w-[45%] lg:w-[35%] xl:w-[25%] `}
      >
        <Panel />
      </section>
      {!chatBox && (
        <div className="max-md:hidden items-start self-center mx-auto text-[1.5rem] text-center font-bold font-mulish text-blue-500">
          Select a chat to view Messages
        </div>
      )}
      {chatBox && (
        <section className="md:w-[55%] lg:w-[65%] xl:w-[75%]">
          <ChatBox />
        </section>
      )}
    </div>
  );
}

export default Chat;
