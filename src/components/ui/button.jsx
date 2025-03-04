import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="relative inline-flex items-center justify-center h-9 px-4 text-gray-600 overflow-hidden 
              transition-all duration-500 hover:text-white
              after:absolute after:left-0 after:-bottom-1 after:w-full 
              after:h-1 after:bg-[#abd373] after:rounded-t-lg
              after:transition-all after:duration-500 
              hover:after:h-[200%] hover:after:-bottom-[100%]
              after:-z-20 z-20"
    >
      {children}
    </button>
  );
};

export default Button;
