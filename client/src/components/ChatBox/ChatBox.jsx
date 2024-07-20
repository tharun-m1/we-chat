import React from "react";
import Profile from "../Profile/Profile";
import MessageEditor from "../MessageEditor/MessageEditor";
import Message from "../Message/Message";

function ChatBox() {
  const arr = Array.from({ length: 50 }, (_, num) => num);
  return (
    <>
      <div className="flex flex-col h-[100%]">
        <div className="shadow-md">
          <Profile status="receptient" />
        </div>
        <div className="flex-grow p-3 overflow-scroll flex flex-col gap-2">
          {arr.map((num) => {
            return <Message me={num % 2 === 0} />;
          })}
        </div>
        <div className="py-3 px-4 shadow-inner">
          <MessageEditor />
        </div>
      </div>
    </>
  );
}

export default ChatBox;
