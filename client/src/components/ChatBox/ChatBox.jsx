import React, { useEffect, useRef } from "react";
import Profile from "../Profile/Profile";
import MessageEditor from "../MessageEditor/MessageEditor";
import Message from "../Message/Message";

function ChatBox() {
  const arr = Array.from({ length: 10 }, (_, num) => num);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, []);
  return (
    <>
      <div className="flex flex-col h-[100%]">
        <div className="shadow-md sticky top-0 bg-white z-10">
          <Profile status="receptient" />
        </div>
        <div
          ref={chatAreaRef}
          className="flex-grow p-3 overflow-scroll flex flex-col gap-2"
        >
          {arr.map((num) => {
            return <Message me={num % 2 === 0} />;
          })}
        </div>
        <div className="py-3 px-4 shadow-inner max-md:fixed max-md:bottom-0 max-md:w-[100%] bg-white">
          <MessageEditor />
        </div>
      </div>
    </>
  );
}

export default ChatBox;
