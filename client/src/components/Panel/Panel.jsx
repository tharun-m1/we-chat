import React from "react";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import Contacts from "../Contacts/Contacts";
import { IoIosPersonAdd } from "react-icons/io";

function Panel() {
  return (
    <>
      <div className="flex flex-col h-full shadow-md divide-y-2 relative">
        <div className=" bg-white z-10 sticky top-0 w-[100%]">
          <section>
            <Profile />
          </section>
          <section>
            <Search />
          </section>
        </div>
        <div className="flex-grow overflow-y-auto ">
          <Contacts />
        </div>
        <div className="absolute z-40 top-[80%] right-5 w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer">
          <IoIosPersonAdd size={"60%"} color="white" />
        </div>
      </div>
    </>
  );
}

export default Panel;
