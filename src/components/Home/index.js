import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <div className="md:min-h-screen max-md:py-5 max-md:h-auto max-md:mx-4 grid grid-cols-1 gap-7 name content-center max-md:content-normal text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-block mb-4" data-aos="fade-down">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
            AI & ML Engineer
          </span>
        </div>

        <h1
          className="head text-6xl max-sm:text-4xl font-bold tracking-tight pb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          data-aos="zoom-in-up"
        >
          Nitish Yadav
        </h1>

        <div
          className="text-4xl max-sm:text-2xl text-gray-300 pb-8 min-h-[120px]"
          data-aos-delay="700"
          data-aos="zoom-in"
        >
          <Typewriter
            options={{
              strings: [
                "Building BeonicX - A SaaS & AI Startup 🚀",
                "AI & ML Engineer specializing in intelligent solutions",
                "Full Stack Developer with expertise in modern technologies",
                "Creating scalable AI-powered applications",
              ],
              delay: 80,
              deleteSpeed: 50,
              pauseFor: 2000,
              autoStart: true,
              loop: true,
              stringSplitter: stringSplitter,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-8" data-aos="fade-up" data-aos-delay="1200">
          <a href="#contact">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-semibold flex items-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </a>

          <a href="#projects">
            <button
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105 font-semibold relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center text-gray-400" data-aos="fade-up" data-aos-delay="1600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Available for opportunities</span>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer w-fit left-1/2 -translate-x-1/2 absolute bottom-16 z-10"
        data-aos="flip-up"
        data-aos-offset="20"
        data-aos-delay="2000"
      >
        <a href="#about" className="group block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700 group-hover:border-purple-500 transition-all duration-300">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                className="text-gray-400 group-hover:text-purple-400 motion-safe:animate-bounce transition-colors"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
