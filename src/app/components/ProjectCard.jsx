import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="glass rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 md:h-56 relative overflow-hidden bg-[#181818] z-0">
        <img 
          src={imgUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300"
          >
            <CodeBracketIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{title}</h5>
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;