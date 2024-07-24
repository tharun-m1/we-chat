import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdArrowRoundBack } from "react-icons/io";
import Images from "../../Images";
import { useDispatch, useSelector } from "react-redux";
import { closeChatBox } from "../../redux/chatBoxSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const getOptions = (status) => {
  if (status === "own") {
    return ["My Profile", "Logout"];
  } else {
    return ["Clear chat", "Close chat"];
  }
};

function Profile({ status = "own" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chatBox = useSelector((state) => state.chatBox.value);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const handleCloseChat = () => {
    dispatch(closeChatBox());
  };

  const handleOptionSelect = (e, op) => {
    e.stopPropagation();
    switch (op) {
      case "Logout": {
        const cookie = Cookies.get("we_chat_token");
        const user_data = Cookies.get("user_data");
        if (cookie) {
          Cookies.remove("we_chat_token");
        }
        if (user_data) {
          Cookies.remove("user_data");
        }
        return navigate("/login");
      }
      case "Close chat": {
        handleCloseChat();
        break;
      }
    }
  };

  return (
    <div className="flex justify-between items-center panel-p py-4">
      <div className="flex items-start max-md:max-w-[70%]">
        <div onClick={handleCloseChat} className="self-center md:hidden">
          {chatBox && <IoMdArrowRoundBack size={25} />}
        </div>
        <div className="flex-shrink-0">
          <img
            className="max-md:w-[45px] max-md:h-[45px] md:w-[50px] md:h-[50px]"
            src={Images.user}
            alt="profile"
          />
        </div>
        {status !== "own" && (
          <div className="overflow-hidden ms-2">
            <div className="text-xl font-semibold text-ellipsis text-nowrap overflow-hidden">
              Tony Stark
            </div>
            <div className=" text-xs font-mulish text-gray-500 font-semibold tracking-wide">
              {" "}
              online
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <SlOptionsVertical
          size={20}
          className="cursor-pointer"
          onClick={() => setShowProfileOptions(!showProfileOptions)}
        />
        {showProfileOptions && (
          <div className="absolute bg-gray-300 px-3 py-2 rounded-lg text-nowrap font-mulish right-[100%] shadow-2xl">
            {getOptions(status)?.map((option, idx) => {
              return (
                <p
                  onClick={(e) => handleOptionSelect(e, option)}
                  className="font-semibold p-1 cursor-pointer hover:opacity-50"
                >
                  {option}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
