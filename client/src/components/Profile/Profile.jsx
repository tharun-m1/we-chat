import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import Images from "../../Images";
function Profile({ status = "own" }) {
  return (
    <div className="flex justify-between items-center panel-p py-4">
      <div className="flex items-start max-w-[50%] ">
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
      <div className="">
        <SlOptionsVertical size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Profile;
