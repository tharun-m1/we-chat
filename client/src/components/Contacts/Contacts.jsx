import React from "react";
import ContactCard from "../ContactCard/ContactCard";
function Contacts() {
  const arr = Array.from({ length: 10 }, (_, num) => num);
  return (
    <div className="panel-p max-md:max-h-[500px] min-h-[500px] divide-y-2">
      {arr.map((item, index) => {
        return (
          <div className="hover:bg-gray-300">
            <ContactCard />
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
