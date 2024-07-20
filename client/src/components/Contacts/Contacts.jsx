import React from "react";
import ContactCard from "../ContactCard/ContactCard";
function Contacts() {
  const arr = Array.from({ length: 10 }, (_, num) => num);
  return (
    <div className="panel-p min-vh-[100%] divide-y-2">
      {arr.map((item, index) => {
        return <ContactCard />;
      })}
    </div>
  );
}

export default Contacts;
