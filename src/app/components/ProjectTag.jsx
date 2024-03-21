import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-purple-500 border-purple-500"
    : "text-slate-600 border-slate-600 hover:border-white hover:text-white";
  return (
    <button
      className={`${buttonStyles} px-6 py-1 md:py-3 text-base md:text-xl border-2 rounded-full cursor-pointer md:w-48`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
