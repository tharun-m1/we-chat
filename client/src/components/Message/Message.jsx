import React from "react";
// import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
function Message({ me }) {
  // const me = false;
  return (
    <>
      <div
        className={`font-mulish flex items-center gap-2 group ${
          me ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`max-w-[50%] flex items-center  gap-2 ${
            me ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div>
            <SlOptions
              className="opacity-0 group-hover:opacity-100 cursor-pointer"
              size={20}
            />
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
                <div>
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
