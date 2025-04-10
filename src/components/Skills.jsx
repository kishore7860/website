import React from 'react';
import { FaPython,FaRobot,FaServer, FaDocker, FaGitAlt, FaReact, FaUsers, FaPuzzlePiece, FaLightbulb, FaClock, FaProjectDiagram } from 'react-icons/fa';
import { SiTensorflow, SiMlflow } from 'react-icons/si';


const Skills = () => {
  const techSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'MLOps', icon: <SiMlflow /> },
    { name: 'AI/ML Frameworks', icon: <SiTensorflow /> },
    { name: 'AI Agents', icon: <FaRobot /> },
    { name: 'DevOps', icon: <FaServer /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Problem Solving', icon: <FaPuzzlePiece /> },
    { name: 'Innovation', icon: <FaLightbulb /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Agile Methodology', icon: <FaProjectDiagram /> },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
          💻 Technologies & Tools
          </h3>
            <div className="grid grid-cols-3 gap-4 text-4xl text-teal-600">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center hover:scale-105 transition"
                >
                  {skill.icon}
                  <span className="text-sm mt-1 text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
            🤝 Interpersonal Excellence
          </h3>
          <div className="grid grid-cols-2 gap-4 text-4xl text-teal-600">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center hover:scale-105 transition"
                >
                  {skill.icon}
                  <span className="text-sm mt-1 text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
