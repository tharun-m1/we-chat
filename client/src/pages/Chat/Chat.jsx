import React, { useEffect } from "react";
import Panel from "../../components/Panel/Panel";
import ChatBox from "../../components/ChatBox/ChatBox";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_BACKEND;
function Chat() {
  const chatBox = useSelector((state) => state.chatBox.value);

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
    });

    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    socket.on("connect_error", (err) => {
      console.error("Connection Error:", err);
    });

    return () => {
      socket.disconnect();
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
