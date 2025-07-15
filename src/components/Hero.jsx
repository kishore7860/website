import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import aiAnimation from '../assets/ai-animation.json';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-teal-600">Kishore Reddy Mamidi</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          <Typewriter
            words={[
              'AI Engineer',
              'RAG Architect',
              'MLOps Developer',
              'Full-Stack ML Engineer',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-gray-600 mb-6">
          I build intelligent applications with LLMs, scalable MLOps pipelines, and impactful AI solutions.
        </p>
        <div className="flex gap-4">
          <a
            href="/Kishore_Resume.pdf"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition"
            download
          >
            📄 Download Resume
          </a>
          <a
            href="#projects"
            className="text-teal-600 font-semibold border border-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition"
          >
            🔍 View Projects
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <Player
          autoplay
          loop
          src={aiAnimation}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;