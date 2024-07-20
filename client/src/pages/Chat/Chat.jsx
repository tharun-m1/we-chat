import React from "react";
import Panel from "../../components/Panel/Panel";
import ChatBox from "../../components/ChatBox/ChatBox";

function Chat() {
  return (
    <div className="h-dvh flex">
      <section className="max-sm:w-[100%] max-md:w-[100%] md:w-[35%] lg:w-[30%] xl:w-[30%]">
        <Panel />
      </section>
      <section className="max-sm:hidden max-md:hidden sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[70%]">
        <ChatBox />
      </section>
    </div>
  );
}

export default Chat;
