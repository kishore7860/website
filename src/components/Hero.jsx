import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
    >
      {/* Left content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, I'm <span className="text-teal-600">Kishore Reddy Mamidi</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
            AI Developer with a Passion for Learning, Building, and Impact.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 text-2xl text-teal-600">
          <a href="https://github.com/kishore7860" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kishore-reddy-mamidi-0a0b8519a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/kishorereddy7221/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/Kishore14688953" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`} 
          alt="Kishore Reddy"
          className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-teal-400"
        />
      </div>
    </section>
  );
};

export default Hero;
