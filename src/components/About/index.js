import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 max-md:mx-4 flex flex-col text-center gap-5 text-white text-lg font-normal py-16"
    >
      <div className="head text-5xl max-md:text-3xl mt-12 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" data-aos={"slide-down"}>
        About Me
      </div>

      <div className="flex flex-row max-md:flex-col max-md:justify-center max-md:items-center max-md:ml-0 gap-8 ml-8 mt-8">
        <div className="flex-col mt-14 max-md:mt-5 flex flex-auto max-md:w-[90%] w-64 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20" data-aos={"fade-up"}>
            <h3 className="text-3xl font-serif max-md:text-2xl mb-4" data-aos={"fade-left"}>
              I'm <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold">Nitish Yadav</span>,
              <br />AI & ML Engineer
            </h3>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-300">Building BeonicX - SaaS & AI Startup</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos={"fade-right"}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Current Role</h4>
                <p className="leading-7 text-gray-300">
                  Building <span className="text-blue-400 font-semibold">BeonicX</span>, a cutting-edge SaaS and AI startup.
                  Working as an <span className="text-purple-400 font-semibold">AI & ML Engineer</span>, developing intelligent solutions
                  that leverage machine learning and artificial intelligence to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos={"fade-left"}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Education</h4>
                <p className="leading-7 text-gray-300">
                  B.Tech in Computer Science and Engineering from <span className="text-purple-400 font-semibold">Gurukula Kangri University (GFTI)</span>,
                  Uttarakhand with an impressive <span className="text-blue-400 font-semibold">CGPA of 8.8</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos={"fade-right"}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Technical Expertise</h4>
                <p className="leading-7 text-gray-300">
                  Proficient in <span className="text-blue-400">Python, JavaScript, Java</span>, and modern frameworks like
                  <span className="text-cyan-400"> React.js, Next.js, Node.js, Express.js</span>.
                  Experienced with <span className="text-purple-400">AI/ML technologies, TensorFlow, PyTorch</span>,
                  databases (<span className="text-green-400">MySQL, MongoDB</span>),
                  and cloud infrastructure (<span className="text-orange-400">AWS, Docker, Kubernetes</span>).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50" data-aos={"fade-left"}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-green-400 mb-2">Professional Experience</h4>
                <p className="leading-7 text-gray-300">
                  Previously worked as <span className="text-green-400 font-semibold">Backend Developer</span> at SharpCareer Technologies
                  and <span className="text-green-400 font-semibold">Full Stack Developer</span> at TechPyro,
                  leading teams and delivering scalable solutions for e-commerce, education, and enterprise platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex-auto w-32 max-md:w-[24rem] sm:rounded-lg pl-4"
          data-aos={"slide-left"}
        >
          <div className="motion-safe:animate-zoomy bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>

          <button className="group py-3 max-md:py-2 max-md:mb-4 max-md:px-6 mt-8 text-white max-md:text-center mx-auto px-9 bg-gradient-to-r from-blue-600 to-purple-600 border-2 w-fit border-transparent rounded-2xl hover:-translate-y-2 duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <a
              href='https://drive.google.com/file/d/1kSHa5Fz6HUmWqewyKxAxm3zb0ws3uCsp/view?usp=sharing'
              download={"Nitish_Yadav_Resume.pdf"}
              className="relative z-10 flex items-center gap-2 font-semibold"
            >
              Download CV
              <DownloadIcon className="group-hover:animate-bounce" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
