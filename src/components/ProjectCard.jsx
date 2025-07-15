import React from 'react';

const ProjectCard = ({ title, description, image, techStack, github, demo }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <div className="flex flex-wrap mt-4 gap-2">
            {techStack.map((tech, idx) => (
              <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 underline">
              GitHub
            </a>
            {demo !== "#" && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-700 underline">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;