import React, { useState } from "react";
import toast from "react-hot-toast";
// import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

const getOptions = (me) => {
  if (me) {
    return ["Delete for me", "Delete for everyone"];
  } else {
    return ["Delete for me"];
  }
};
function Message({ me }) {
  const [showMessageOptions, setShowMessageOptions] = useState(false);
  // const me = false;
  const handleOptionSelect = (e, op) => {
    e.preventDefault();
    switch (op) {
      case "Delete for me": {
        toast.success("Message Deleted for you.");
        setShowMessageOptions(false);
        break;
      }
      case "Delete for everyone": {
        toast.success("Deleted for everyone");
        setShowMessageOptions(false);
        break;
      }
    }
  };
  return (
    <>
      <div
        className={`font-mulish flex items-center gap-2 group ${
          me ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`max-w-[50%] max-sm:max-w-[90%] max-md:max-w-[80%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] flex items-center  gap-2 ${
            me ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="relative">
            <SlOptions
              className="opacity-0 group-hover:opacity-100 cursor-pointer max-md:opacity-100"
              size={20}
              onClick={() => setShowMessageOptions(!showMessageOptions)}
            />
            {showMessageOptions && (
              <div className="absolute bg-gray-300 px-3 py-2 rounded-lg text-nowrap font-mulish shadow-2xl">
                {getOptions(me).map((option, index) => {
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
          <div
            className={`max-w[90%] text-wrap flex ${
              me ? "bg-blue-500" : "bg-gray-500 opacity-90"
            } rounded-2xl text-white p-1 w-auto`}
          >
            <div className="p-2 text-md font-semibold tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              neque.
            </div>
            <div className="ms-auto self-end text-[0.6rem] pe-2 font-light text-white tracking-wide flex">
              <div className="">2:04pm</div>
              {me && (
                <div className="">
                  {/* <IoCheckmarkOutline size={15} /> */}
                  <IoCheckmarkDoneOutline color="" className="ms-1" size={18} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
