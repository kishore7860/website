import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Resume</h2>
        <p className="text-gray-700 mb-4">
          Click below to download my resume or view the embedded version.
        </p>
        <a
          href="/Resume.pdf"
          download
          className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full shadow hover:bg-teal-700 transition mb-6"
        >
          Download Resume
        </a>

        <div className="border rounded-xl shadow-md overflow-hidden h-[750px]">
          <iframe
            src="/Resume.pdf"
            title="Kishore Reddy Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
