import React from "react";
import Panel from "../../components/Panel/Panel";
import ChatBox from "../../components/ChatBox/ChatBox";
import { useSelector } from "react-redux";

function Chat() {
  const chatBox = useSelector((state) => state.chatBox.value);
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
