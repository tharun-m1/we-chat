import React from "react";
// import Images from "../../Images";
import styles from "./topcontent.module.css";
function TopContent() {
  return (
    <>
      <div
        className={`h-full ${styles.topCont} flex flex-col justify-center items-center font-mulish text-white`}
      >
        <div>
          <div className="text-[2.5rem] font-semibold ">WeChat Texting App</div>
          <div className="flex gap-5 mt-3">
            <button className="flex-grow border-2 service-btn">Services</button>
            <button className="flex-grow border-2 contact-btn">Contacts</button>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default TopContent;
