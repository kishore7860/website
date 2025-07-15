import React from 'react';
import skills from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">🛠️ Skills</h2>
      <div className="space-y-10">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.items.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-teal-50 text-teal-800 p-3 rounded-lg text-sm text-center font-medium shadow hover:shadow-md transition"
                  title={skill.description}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;