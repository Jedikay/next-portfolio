import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-96 rounded-3xl group">
      <div
        className="relative h-52 md:h-72 rounded-t-3xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full transition-all duration-500 bg-opacity-75 overlay bg-neutral-900 group-hover:flex rounded-t-3xl">
          <Link
            href={gitUrl}
            className="relative m-2 border-2 rounded-full h-14 w-14 border-slate-400 hover:border-white text-slate-400 hover:text-white"
          >
            <CodeBracketIcon className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
          </Link>
          <Link
            href={previewUrl}
            className="relative border-2 rounded-full h-14 w-14 border-slate-400 hover:border-white text-slate-400 hover:text-white"
          >
            <EyeIcon className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 " />
          </Link>
        </div>
      </div>
      <div className="px-4 py-6 text-slate-200 rounded-b-3xl bg-neutral-900">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
