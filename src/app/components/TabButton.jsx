import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-yellow-400"
    : "text-[#ADB7BE] hover:text-white";
  return (
    <button 
      onClick={selectTab}
      className="pb-2 transition-colors duration-300"
    >
      <p className={`mr-4 font-semibold ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;