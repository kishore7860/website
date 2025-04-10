import React from 'react';

const projects = [
  {
    title: 'House Price Prediction (MLOps Pipeline)',
    description:
      'Built a production-ready ML pipeline using MLflow and ZenML with deep EDA, experiment tracking, CI/CD, and cloud deployment. Focused on clean code, reproducibility, and real-world deployment.',
    technologies: ['Python', 'MLflow', 'ZenML', 'CI/CD', 'Docker', 'AWS'],
    github: 'https://github.com/kishore7860/prices-predictor-system.git',
  },
  {
    title: 'AI Tutor & Quiz Generator (RAG + LLM)',
    description:
      'Developed a personalized AI tutor and quiz generator using OpenAI APIs, Retrieval-Augmented Generation, and prompt engineering. Features multilingual support, fine-tuned models, Docker containers, and AWS deployment.',
    technologies: ['OpenAI', 'RAG', 'LLM', 'Docker', 'AWS'],
    github: 'https://github.com/kishore7860/AI-tutor.git',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="text-sm text-teal-600 mb-2">
                {project.technologies.join(' • ')}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-teal-600 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
