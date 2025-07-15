import experience from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">💼 Experience</h2>
      <div className="relative border-l-4 border-teal-600 pl-6 space-y-10">
        {experience.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-3 top-1.5 w-6 h-6 bg-teal-600 rounded-full border-4 border-white"></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.role} <span className="text-sm text-gray-500"> @ {item.company}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-2 italic">{item.location} | {item.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {item.achievements.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;