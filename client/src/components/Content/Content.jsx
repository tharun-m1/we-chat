import React from "react";
// import Images from "../../Images";
import TopContent from "../TopContent/TopContent";
import MiddleContent from "../MiddleContent/MiddleContent";
import BottomContent from "../BottomContent/BottomContent";

function Content() {
  return (
    <div>
      <div className="h-[100vh] border-2 border-blue-600">
        <TopContent />
      </div>
      <div>
        <MiddleContent />
      </div>
      <div>
        <BottomContent />
      </div>
    </div>
  );
}

export default Content;
