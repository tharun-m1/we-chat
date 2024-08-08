import React from "react";
import { IoIosMenu } from "react-icons/io";
function Header() {
  return (
    <div className="p-4 pe-5 lg:pe-32 font-mulish bg-transparent text-white font-semibold tracking-wide text-md">
      <div className="max-md:hidden flex gap-4 lg:gap-6">
        <div className="ms-auto cursor-pointer">About</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">Log In</div>
        <div className="cursor-pointer">Sign Up</div>
      </div>
      <IoIosMenu size={30} className="ms-auto md:hidden" />
    </div>
  );
}

export default Header;
