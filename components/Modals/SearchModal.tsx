import React from "react";

const SearchModal = () => {
  const searchList = [""];
  return (
    <div className="bg-white w-[400px] h-fit overflow-visible">
      <ul>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>UI/Ux Designer</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
