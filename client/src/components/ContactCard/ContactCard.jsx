import React from "react";
import Images from "../../Images";

function ContactCard() {
  return (
    <>
      <div className="py-2">
        <div className="flex items-stretch font-mulish cursor-pointer">
          <div className=" w-[15%] min-w-[55px]">
            <img
              src={Images.user}
              className="object-contain w-[100%]"
              alt="contact"
            />
          </div>
          <div className="w-[75%]">
            <p className="text-xl font-semibold overflow-hidden text-ellipsis text-nowrap w-[95%] ps-2">
              Tharun M
            </p>
            <p className="overflow-hidden text-ellipsis text-nowrap w-[95%] ps-2 text-sm text-slate-500">
              this is very very very long message from some one
            </p>
          </div>
          <div className="self-center w-[10%] text-center">
            <span className="rounded-full bg-blue-300 py-1 px-2 text-sm font-extrabold">
              9
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
