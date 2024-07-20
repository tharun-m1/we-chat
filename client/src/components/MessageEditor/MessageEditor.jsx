import React from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import CustomTextArea from "../CustomTextArea/CustomTextArea";

function MessageEditor() {
  return (
    <>
      <div className="flex items-end">
        <div className="flex items-end">
          <div className="px-1">
            <MdOutlineEmojiEmotions
              color="gray"
              size={30}
              className="cursor-pointer"
            />
          </div>
          <div className="px-1">
            <IoAddOutline color="gray" size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex-grow px-1">
          {/* <textarea className="w-[100%] input bg-gray-100 border-none focus:outline-none focus:ring-0 focus:border-none text-area" /> */}
          <CustomTextArea />
        </div>
        <div className="px-1 pb-3">
          <IoIosSend color="gray" className="cursor-pointer" size={30} />
        </div>
      </div>
    </>
  );
}

export default MessageEditor;
