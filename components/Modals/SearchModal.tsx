import React from "react";

const SearchModal = () => {
  const searchList = [""];
  return (
    <div className="bg-white w-[345px] min-h-[200px] border border-[#000E2B] shadow-lg shadow-[#10182814] text-[#00030A] rounded-lg">
      <ul>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className="p-2 font-medium leading-6">UI/Ux Designer</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
