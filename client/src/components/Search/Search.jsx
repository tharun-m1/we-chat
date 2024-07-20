import React from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="panel-p">
      <div className="flex items-stretch">
        <div className="flex items-center border-y-2 border-s-2 flex-shrink-0 rounded-l-lg">
          <CiSearch size={40} className="px-2 flex-shrink-0" />
        </div>
        <div className="flex-grow border-e-2 border-y-2 rounded-r-lg">
          <input
            type="text"
            className="w-100 input border-none focus:ring-0 focus:border-none"
            placeholder="Search..."
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Search;
